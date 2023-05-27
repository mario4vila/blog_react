import React, {useEffect, useState} from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";
import BlogApi from "../api/BlogApi";
import {useNavigate} from "react-router-dom";

const CreateArticle = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        title: '',
        content: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await BlogApi.createArticle(formValues)
        if (response.data.status!=='success'){
            alert('Error');
            return;
        }

        if (!selectedFile){
            alert('Article Created!');
            return;
        }

        const articleId = response.data.article._id;
        const formData = new FormData();

        formData.append(
            'file0',
            selectedFile,
            selectedFile.name
        );
        await BlogApi.updateArticleImage(articleId, formData);
        alert('Article Created with Image!');

        navigate("/blog");
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div id="create-article">
            <Slider
                title={"Create Article"}
                size={'small'}
            />
            <div className="center">
                <section id="content">

                    <form className={"mid-form"} onSubmit={handleSubmit}>
                        <div className={"form-group"}>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" value={formValues.title} onChange={handleInputChange}/>
                        </div>

                        <div className={"form-group"}>
                            <label>Content</label>
                            <textarea name="content" value={formValues.content} onChange={handleInputChange}/>
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor="file0">Image</label>
                            <input type="file" id="file0" name="file0" onChange={handleFileChange}/>
                        </div>

                        <input type="submit" value={"Save"} className={"btn btn-success"}/>
                    </form>

                </section>
                <Sidebar/>

                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default CreateArticle;