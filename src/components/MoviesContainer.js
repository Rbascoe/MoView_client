import React, { useState, Component } from 'react'
import MovieCard from './MovieCard';
import MoviePage from './MoviePage';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          MoView
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

export const MoviesContainer = (props) => {

  // const moviePage = props.movies.movies.map(movie => <MoviePage imdb_id={movie.imdb_id} title={movie.title} poster={movie.poster} plot={movie.plot} release_date={movie.release_date}/>)
  
        return (
            <>
              {props.movies.movies.map(movie => 
    <Container  maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={9} sm={6} md={3}> 
            <MovieCard id={movie.id} title={movie.title} poster={movie.poster} plot={movie.plot}/>
           </Grid>
        </Grid>    
    </Container>   
  )}
              
              <Copyright />
            </>
        )   
    
}

export default MoviesContainer;
