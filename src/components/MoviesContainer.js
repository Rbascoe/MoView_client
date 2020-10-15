import React, { useState, Component } from 'react'
import MovieCard from './MovieCard';
import MoviePage from './MoviePage';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';

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

  const movies = props.movies.movies.map(movie => <MovieCard title={movie.title} poster={movie.poster} plot={movie.plot}/>)
        // {this.props.movies.map( movie =>
        // <MoviePage title={movie.title} poster={movie.poster} plot={movie.plot}/>)};
        return (
            <div>
                {movies}
               <Copyright />
            </div>
        )   
    
}

export default MoviesContainer;
