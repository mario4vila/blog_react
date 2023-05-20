import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";

class PageArticle extends React.Component {
    render() {
        return (
            <div id="home">
                <Slider
                    title={"Single Article"}
                    size={'small'}
                />
                <div className="center">
                    <section id="content">
                        <h1>Single Article</h1>
                    </section>
                    <Sidebar/>

                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default PageArticle;