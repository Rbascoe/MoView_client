import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

export const MoviePage = (props) => {
    // debugger
    console.log(props.movie)
//  const []
    // fetch("http://localhost:3000/api/v1/reviews")
    // .then(res => res.json())
    // .then(reviews => this.setState({reviews: reviews}))

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
            {localStorage.id?
            <ReviewForm movie_id={props.id} />: null}
            </div>
            <div>
            <ReviewsContainer reviews={props.reviews}/>
            </div>
        </div>
    )
}

export default withRouter(MoviePage);
