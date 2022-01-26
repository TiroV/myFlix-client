import React from 'react';
import { MovieCard } from '../movie-card/movie-card';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Ponyo1', Description: 'desc1...', ImagePath: '...' },
                { _id: 2, Title: 'Akira', Description: 'desc2...', ImagePath: '...' },
                { _id: 3, Title: 'Dune', Description: 'desc3...', ImagePath: '...' }
            ]
        }
    }

    render() {
        const { movies } = this.state;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {movies.map(movie => <MovieCard />)}
            </div>
        );
    }

export default MainView;