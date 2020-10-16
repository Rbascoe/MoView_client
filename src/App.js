import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header.js'
import NavBar from './components/NavBar.js'
import MoviesContainer from './components/MoviesContainer.js'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UserProfile from './components/UserProfile';
import MoviePage from './components/MoviePage'
import ReviewForm from './components/ReviewForm'
import ReviewsContainer from './components/ReviewsContainer'


function App() {
  const [moviesArray, setMovies] = useState({
    movies: []
  })
  

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
    .then(res => res.json())
    .then(movies => setMovies({movies: [...movies]}))
  },[])

  return (
      <div className="App">
        <BrowserRouter>
    
        <Header className="header"/>
        <NavBar
        />
          <br></br><br></br><br></br>
        <Switch>
          <Route exact path="/home" render={(routerProps) => <MoviesContainer {...routerProps} movies={moviesArray}/>}/>
        </Switch>
          <Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} />}/>
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} />}/>
          <Route path="/profile" render={(routerProps) => <UserProfile {...routerProps} />}/>
       
          <Route path="/movie/:id" render={(props) => {
          
            let id=parseInt(props.match.params.id)
            let movieShow = moviesArray.movies.map(movie => movie)
            let singleMovie = movieShow.find(oneMovie => oneMovie.id === id)
             return <MoviePage  movie={singleMovie}/>}}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
