import React, {useEffect, useState} from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";
import BlogApi from "../api/BlogApi";
import {useParams} from "react-router-dom";
import Moment from "react-moment";
import 'moment/locale/es'

const PageArticle = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null);

    const getArticle = async () => {
        return await BlogApi.getArticle(id);
    }

    useEffect(() => {
        getArticle().then((response) => {
            setArticle(response.data.article);
        });

        return () => {
        };
    }, []);

    return (
        <div id="home">
            <Slider
                title={"Single Article"}
                size={'small'}
            />
            <div className="center">
                <section id="content">

                    {article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                <img
                                    src={BlogApi.getUrlImageFromArticle(article)}
                                    alt={article.title}/>
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                            <Moment fromNow={true} locale={'es'}>{article.date}</Moment>
                        </span>
                            <p>{article.content}</p>

                            <button className={'btn btn-danger'}>Delete</button>
                            <button className={'btn btn-warning'}>Edit</button>

                            <div className="clearfix"></div>
                        </article>
                    }

                </section>
                <Sidebar/>

                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default PageArticle;