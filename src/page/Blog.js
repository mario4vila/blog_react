import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";
import axios from 'axios';

class Blog extends React.Component {

    state = {
        articles: null,
    }

    componentDidMount() {
        axios.get('http://localhost:3900/api/articles')
            .then(response => {
                // handle success
                console.log(response.data.articles);

                this.setState({
                    articles: response.data.articles
                });
            })
            .catch(function (error) {
                // handle error
                // console.log(error);
            })
            .finally(function () {
                // always executed
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
                            src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                            alt="Paisaje"/>
                    </div>

                    <h2>{article.title}</h2>
                    <span className="date">
                            {article.date}
                        </span>
                    <a href="#">Leer más</a>

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