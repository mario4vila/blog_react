import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";
import BlogApi from "../api/BlogApi";
import Moment from "react-moment";
import 'moment/locale/es'
import {Link} from "react-router-dom";

class Blog extends React.Component {

    state = {
        articles: null,
    }

    async componentDidMount() {
        const response = await BlogApi.getArticles();

        this.setState({
            articles: response.data.articles
        });
    }

    render() {
        if (this.state.articles === null) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }

        const listArticles = this.state.articles.map((article) => {
            return (
                <article className="article-item" key={article._id}>
                    <div className="image-wrap">
                        <img
                            src={BlogApi.getUrlImageFromArticle(article)}
                            alt={article.title}/>
                    </div>

                    <h2>{article.title}</h2>
                    <span className="date">
                        <Moment fromNow={true} locale={'es'}>{article.date}</Moment>
                        </span>
                    <Link to={`/blog/article/${article._id}`}>Leer más</Link>

                    <div className="clearfix"></div>
                </article>
            );
        })

        return (
            <div id="blog">
                <Slider
                    title={"Last Articles"}
                    size={'small'}
                />
                <div className="center">
                    <section id="content">
                        <div id="articles">
                            {this.state.articles &&
                                <div>
                                    {listArticles}
                                </div>
                            }
                        </div>
                    </section>
                    <Sidebar
                        blog={true}
                    />

                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Blog;