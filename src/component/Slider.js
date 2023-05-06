import React from "react";

class Slider extends React.Component {
    render() {
        return (
            <div id="slider" className="slider-big">
                <h1>{this.props.title}</h1>
                <a href="#" className="btn-white">Ir al blog</a>
            </div>
        );
    }
}

export default Slider;