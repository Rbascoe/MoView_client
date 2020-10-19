import React from 'react'
import { Route, withRouter } from 'react-router-dom';

const UserProfile = () => {
    console.log(localStorage.user)
    return (
        <div>
           <h2>Name:</h2> 
           {localStorage.name}
           <h3>Age:</h3>
           {localStorage.age}
           <h3>Bio:</h3>
           {localStorage.bio}
           {/* <h3>Reviews:</h3>
           
           {localStorage.reviews} */}
        </div>
    )
}

export default withRouter(UserProfile);
