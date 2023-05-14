import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Slider
                    title={"Welcome to my blog made with React"}
                />
                <div className="center">
                    <section id="content">
                        <h1>Last Articles</h1>
                    </section>
                    <Sidebar/>

                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Home;