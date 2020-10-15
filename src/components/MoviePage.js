import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

export const MoviePage = (props) => {
    // const movies = props.movies.moviesArray.map(movie => movie)
    const movie = props.movies.movies.map(movie => console.log(movie.title))
    return (
        <div>
            <div>
            <h1>{movie.title}</h1>
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
