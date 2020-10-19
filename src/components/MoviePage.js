import React from 'react'
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
    console.log(props)
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Grid container spacing={0} >
                <Grid item className={classes.container}>
                    <img src={`http://image.tmdb.org/t/p/w200/${props.poster}`} />
                    <h3>Title:</h3><br></br>
                    <b>{props.title}</b>
                    <h3>Plot: </h3><br></br>
                    <b>{props.plot}</b>
                    <h3>Imdb ID: </h3><br></br>
                    <b>{props.imdb_id}</b>
                    <h3>Release date: </h3><br></br>
                    <b>{props.release_date}</b>
                </Grid>
                <Grid item className={classes.container}> 
                    <div>
                    {localStorage.id?
                    <ReviewForm  />: null}
                    </div>
                    <div>
                    <ReviewsContainer reviews={props.reviews}/>
                    </div>
                </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default withRouter(MoviePage);
