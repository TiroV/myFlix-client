import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {


    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Ponyo', Description: 'It\'s ponyo! ', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png' },
                { _id: 2, Title: 'Akira', Description: 'Destruction follows in the wake of Tetsuo as he searches for answers on the mysterious Akira.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5d/AKIRA_%281988_poster%29.jpg' },
                { _id: 3, Title: 'Dune', Description: 'Based on the science fiction novel of the same name, set on the planet of Arrakis. ', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg' }
            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;


        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );
    }

}
export default MainView;
