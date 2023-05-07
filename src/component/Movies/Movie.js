import React from 'react'

class Movie extends React.Component {
    render() {


        return (
            <div id="articles">
                <article className="article-item" id="article-template">
                    <div className="image-wrap">
                        <img
                            src={this.props.image}
                            alt="Paisaje"/>
                    </div>

                    <h2>{this.props.title}</h2>
                    <span className="date">Hace 5 minutos</span>
                    <a href="#">Leer más</a>

                    <div className="clearfix"></div>
                </article>

            </div>
        )
    }
}

export default Movie