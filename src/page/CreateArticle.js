import React, {useEffect, useState} from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";
import BlogApi from "../api/BlogApi";
import {useParams} from "react-router-dom";
import Moment from "react-moment";
import 'moment/locale/es'

const CreateArticle = () => {
    const [formValues, setFormValues] = useState({
        title: '',
        content: '',
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div id="create-article">
            <Slider
                title={"Create Article"}
                size={'small'}
            />
            <div className="center">
                <section id="section-content">

                    <form className={"mid-form"} onSubmit={handleSubmit}>
                        <div className={"form-group"}>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" value={formValues.title} onChange={handleInputChange}/>
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor="content">Content</label>
                            <textarea id="content" name="content" value={formValues.content} onChange={handleInputChange}/>
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor="file0">Image</label>
                            <input type="file" id="file0" name="file0"/>
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