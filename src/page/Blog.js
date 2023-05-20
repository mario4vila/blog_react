import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";
import 'moment/locale/es'
import ListArticles from "../component/Article/ListArticles";

class Blog extends React.Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    title={"Last Articles"}
                    size={'small'}
                />
                <div className="center">
                    <section id="content">
                        <ListArticles/>
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