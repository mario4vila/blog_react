import React from "react";
import Slider from "../component/Slider";
import Sidebar from "../component/Sidebar";

class Form extends React.Component {
    render() {
        return (
            <div id="form">
                <Slider
                    title={"Create new entry"}
                    size={'small'}
                />
                <div className="center">
                    <section id="content">
                        <p>Here to be showed form</p>
                    </section>
                    <Sidebar/>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Form;
