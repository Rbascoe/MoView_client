import React from 'react'
import { Route, withRouter } from 'react-router-dom';

const UserProfile = () => {
    console.log(localStorage.user)
    return (
        <div style={{align: 'center'}}>
           <h2 style={{color: 'red'}}>Name</h2> 
            <b style={{color: 'white'}}>{localStorage.name}</b>
           <h3 style={{color: 'red'}}>Age</h3>
            <b style={{color: 'white'}}>{localStorage.age}</b>
           <h3 style={{color: 'red'}}>Bio</h3>
            <b style={{color: 'white'}}> {localStorage.bio}</b>
           
        </div>
    )
}

export default withRouter(UserProfile);
