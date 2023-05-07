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
        ]
    }

    render() {
        return (
            <div className={'movies'}>
                <h2>Movies</h2>

                {
                    this.state.movies.map((movie, i) => {
                        return (
                            <Movie
                                key={i}
                                title={movie.title}
                                image={movie.image}
                            />
                        );
                    })
                }
            </div>
        )
    }
}

export default Movies;