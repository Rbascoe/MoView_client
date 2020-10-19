import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

export const MoviePage = (props) => {
    console.log(props.movie)

    return (
        <div>
            
            <img src={`http://image.tmdb.org/t/p/w200/${props.poster}`} />
            <h3>Title:</h3><br></br>
            {props.title}
            <h3>Plot: </h3><br></br>
            {props.plot}
            <h3>Imdb ID: </h3><br></br>
            {props.imdb_id}
            <h3>Release date: </h3><br></br>
            {props.release_date}

            {/* {props.reviews.map(review => review.content)} */}
            
            <div>
            <ReviewForm  />
            </div>
            <div>
            <ReviewsContainer reviews={props.reviews}/>
            </div>
        </div>
    )
}

export default withRouter(MoviePage);
