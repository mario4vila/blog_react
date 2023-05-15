import React from "react";

class Slider extends React.Component {
    render() {
        const size = this.props.size ?? 'big';
        return (
            <div id="slider" className={'slider-'+size}>
                <h1>{this.props.title}</h1>
                {this.props.button &&
                    <a href="#" className="btn-white">{this.props.button}</a>
                }
            </div>
        );
    }
}

export default Slider;