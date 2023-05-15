import React from 'react'

class Movie extends React.Component {

    mark = () => {
        this.props.markFavourite(this.props.movie)
    }
    render() {
        const {image, title} = this.props.movie;

        return (
            <div id="articles">
                <article className="article-item" id="article-template">
                    <div className="image-wrap">
                        <img
                            src={image}
                            alt="Paisaje"/>
                    </div>

                    <h2>{title}</h2>
                    <span className="date">Hace 5 minutos</span>
                    <a href="#">Leer más</a>
                    <button onClick={this.mark}>Mark as a favourite</button>
                    <div className="clearfix"></div>
                </article>

            </div>
        )
    }
}

export default Movie