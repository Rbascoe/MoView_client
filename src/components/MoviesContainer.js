import React, { useState, Component } from 'react'
import MovieCard from './MovieCard';
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
  

export default class MoviesContainer extends Component {

    // state = {
    //     title: null,
    //     poster: null
        
    // }
  

    // const [movie, setMovie] = useState({
    //     movie: {}
    // }
    // )
    // setMovies = () => {
    //  this.movies.moviesArray.map(movie => this.setState(
    //     {
    //       title: movie.title,
    //       poster: movie.poster
    //     }
    //   ))
    // }

   

    render = () => {
        const movies = this.props.movies.moviesArray.map(movie => movie)
        return (
            <div>
                {movies.map(movie => 
               <MovieCard title={movie.title} poster={movie.poster} plot={movie.plot}/>)}
               <Copyright />
            </div>
        )  
    }  
    
}
