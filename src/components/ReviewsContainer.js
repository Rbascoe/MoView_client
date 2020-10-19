import React from 'react'

const ReviewsContainer = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
            {props.reviews.map(review => <li>{review.content}</li>)}
            </ul>
        </div>
    )
}

export default ReviewsContainer
