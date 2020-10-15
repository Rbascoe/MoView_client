import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

export const MoviePage = (props) => {
    // const movies = props.movies.moviesArray.map(movie => movie)
    // const movie = movies.map(movie => {movie.title, movie.plot})
    return (
        <div>
            <div>
            <h1>Movie Info goes Here</h1>
            </div>
            <div>
            <ReviewForm />
            </div>
            <div>
            <ReviewsContainer />
            </div>
        </div>
    )
}

export default withRouter(MoviePage);
