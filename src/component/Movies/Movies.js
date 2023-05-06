import React, {Component} from "react";
import Greeting from "./Greeting";

class Movies extends Component {
    state = {
        movies: [
            {
                title: 'Batman Begins',
                image: 'https://pics.filmaffinity.com/Batman_Begins-413277928-large.jpg'
            },
            {
                title: 'Matrix',
                image: 'https://pics.filmaffinity.com/Matrix-155050517-large.jpg'
            },
            {
                title: 'The Godfather',
                image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
            }
        ]
    }

    render() {
        return (
            <div className={'movies'}>
                <h2>Movies</h2>
                <Greeting/>
                {
                    this.state.movies.map((movie, i) => {
                        return (
                            <div id="articles">
                                <article className="article-item" id="article-template">
                                    <div className="image-wrap">
                                        <img
                                            src={movie.image}
                                            alt="Paisaje"/>
                                    </div>

                                    <h2>{movie.title}</h2>
                                    <span className="date">Hace 5 minutos</span>
                                    <a href="#">Leer más</a>

                                    <div className="clearfix"></div>
                                </article>

                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default Movies;