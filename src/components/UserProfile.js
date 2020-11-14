import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const UserProfile = () => {
    // console.log(localStorage.user)
    return (
        <div style={{marginLeft: '40px', marginTop: '100px', marginBottom: '50px'}}>
            <Avatar style={{width:'150px', height: '150px' }}></Avatar><b/><b/>
           <h1 style={{color: 'red'}}>Name</h1> 
            <b style={{color: 'white'}}>{localStorage.name}</b>
           <h2 style={{color: 'red'}}>Age</h2>
            <b style={{color: 'white'}}>{localStorage.age}</b>
           <h2 style={{color: 'red'}}>Bio</h2>
            <b style={{color: 'white'}}> {localStorage.bio}</b><b/>
           
        </div>
    )
}

export default withRouter(UserProfile);
