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
        return (
          <>
           <br/>
           <br/>
           <br/>
          
          <Container  maxWidth="lg">
            <Grid container spacing={2}>
              {props.movies.map(movie => 
          <Grid item xs={12} sm={8} md={4}> 
            <MovieCard id={movie.id} title={movie.title} poster={movie.poster} plot={movie.plot}/>
           </Grid>  
            )}
            </Grid>    
          </Container> 
          <br></br><br></br>
           <Copyright />
          </>
        )   
    
}

export default MoviesContainer;
