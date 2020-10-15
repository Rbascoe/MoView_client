import React, { useState, useEffect } from 'react';
// import './App.css';
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
      <BrowserRouter >
        <Header className="header"/>
        <NavBar
        />
        {/* <Switch> */}
          <Route path="/" render={(routerProps) => <MoviesContainer {...routerProps} movies={moviesArray}/>}/>
        
          <Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} />}/>
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} />}/>
          <Route path="/profile" render={(routerProps) => <UserProfile {...routerProps} />}/>
          {/* </Switch> */}
          <Route path="/moviepage" render={(routerProps) => <MoviePage {...routerProps} movies={moviesArray}/>}/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
