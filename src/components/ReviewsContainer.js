import React from 'react'

const ReviewsContainer = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Reviews Go Here</h2>
            
            {props.reviews.map(review => review.content)}
           
        </div>
    )
}

export default ReviewsContainer
