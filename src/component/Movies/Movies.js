import React, {Component} from "react";
import Movie from "./Movie";

class Movies extends Component {
    state = {
        movies: [
            {
                title: 'Batman Begins',
                image: 'https://pics.filmaffinity.com/Matrix-155050517-large.jpg'
            },
            {
                title: 'Matrix',
                image: 'https://pics.filmaffinity.com/Matrix-155050517-large.jpg'
            },
            {
                title: 'The Godfather',
                image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
            }
        ],
        favourite: null
    }

    markFavourite = (movie) => {
        this.setState({
            favourite: movie
        });
    }

    render() {
        let movieFavourite = (
            <p>There isn't favourite movie</p>
        );
        if(this.state.favourite){
            movieFavourite = (
                <p>
                    <strong>The favourite movie is:</strong>
                    <span>{this.state.favourite.title}</span>
                </p>
            );
        }

        return (
            <div className={'movies'}>
                <h2>Movies</h2>

                {movieFavourite}

                {
                    this.state.movies.map((movie, i) => {
                        return (
                            <Movie
                                key={i}
                                movie={movie}
                                markFavourite={this.markFavourite}
                            />
                        );
                    })
                }
            </div>
        )
    }
}

export default Movies;