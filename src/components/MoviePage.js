import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

export const MoviePage = (props) => {
    console.log(props)
    return (
        <div>
            
            <h1>{props.title}</h1>
            
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
