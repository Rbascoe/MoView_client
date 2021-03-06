import React, { useState, useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewsContainer from './ReviewsContainer';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
       maxwidth: 50,
    },

  }));


export const MoviePage = (props) => {
    // debugger
    // console.log(props)
    const classes = useStyles();

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${props.id}/reviews`)
        .then(res => res.json())
        .then(reviews => setReviews([...reviews]))
    })


    return (
        <Container style={{backgroundColor: '#495057'}}>
            <br/>
            <br/>
        <div >
                <Grid container spacing={0} >
                <Grid item xs={6}>
                    <img src={`http://image.tmdb.org/t/p/w200/${props.poster}`} />
                    <h3 style={{color: 'red'}} >Title:</h3>
                        <b style={{color: 'white'}}>{props.title}</b>
                    <h3 style={{color: 'red'}} >Plot: </h3>
                        <b style={{color: 'white'}}>{props.plot}</b>
                    <h3 style={{color: 'red'}} > Imdb ID: </h3>
                        <b style={{color: 'white'}}>{props.imdb_id}</b>
                    <h3 style={{color: 'red'}} >Release date: </h3>
                        <b style={{color: 'white'}}>{props.release_date}</b>
                </Grid>
                <Grid item xs={6}> 
                    <div>
                    {localStorage.id?
                    <ReviewForm id={props.id} />: null}
                    </div>
                    <div>
                    <ReviewsContainer movieId={props.id} reviews={reviews} />
                    </div>
                </Grid>
                </Grid>
        </div>
        </Container>
    )
}

export default withRouter(MoviePage);
