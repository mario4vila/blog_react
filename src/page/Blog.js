import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";
import axios from 'axios';

class Blog extends React.Component {

    state = {
        articles: {},
        status: 'error'
    }

    componentDidMount() {
        axios.get('http://localhost:3900/api/articles')
            .then(response => {
                // handle success
                console.log(response.data.articles);

                this.setState({
                    articles: response.data.articles,
                    status: 'success'
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
        return (
            <div id="blog">
                <Slider
                    title={"Last Articles"}
                    size={'small'}
                />
                <div className="center">
                    <section id="content">
                        {this.state.status === 'success' &&
                            <div>
                                {this.state.articles.map((article) => {
                                    return (
                                        <p>{article.title}</p>
                                    );
                                })}
                            </div>
                        }
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