import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";

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
                        <p>Here to be showed articles</p>
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