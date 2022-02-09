import React from 'react';

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;

<<<<<<< Updated upstream
        return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
=======
        return (
            <Card>
                <Card.Img variant="top" src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Link to={`/movies/${movie._id}`}>
                        <Button variant="link">Open</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
>>>>>>> Stashed changes
    }
}