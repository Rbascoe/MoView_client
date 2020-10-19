import React, { useState, useEffect, useLayoutEffect} from 'react';
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
import LoggedInNav from './components/LoggedInNav';


function App() {
  const [moviesArray, setMovies] = useState({
    movies: []
  })
  
  const [reviews, setReviews] = useState({
    reviews: []
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
    .then(res => res.json())
    .then(movies => setMovies({movies: [...movies]}),
    setLoading(false))
  },[])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/reviews")
    .then(res => res.json())
    .then(reviews => setReviews({reviews: reviews}))
  },[])

  return (
      <div className="App">
        {!loading?
        <BrowserRouter>
    
        <Header className="header"/>
        {!localStorage.id?
        <NavBar/>:<LoggedInNav/>}
          <br></br><br></br><br></br>
        <Switch>
          <Route exact path="/home" render={(routerProps) => <MoviesContainer {...routerProps} movies={moviesArray}/>}/>
        </Switch>
          <Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} />}/>
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} />}/>
          <Route path="/profile" render={(routerProps) => <UserProfile {...routerProps} />}/>
          
          <Route exact path="/movie/:id" render={(props) => {
            
          
            let id=parseInt(props.match.params.id)
            
            // let movieShow = moviesArray.movies.map(movie => movie)
            let singleMovie = moviesArray.movies.find(oneMovie => oneMovie.id === id)
            console.log(moviesArray)
            let movieReviews = []
            let review = reviews.reviews.map(singleReview => {
              if (singleReview.movie_id === singleMovie.id ){
                movieReviews.push(singleReview)
              }
            })
            console.log(movieReviews)

             return <MoviePage  
             movie={singleMovie} 
             title={singleMovie.title} 
             imdb_id={singleMovie.imdb_id}
             plot={singleMovie.plot}
             release_date={singleMovie.release_date}
             poster={singleMovie.poster}
             reviews={movieReviews}
             
             
             />}}/>
        </BrowserRouter>:
        <div>...Loading</div>}
      </div>
  );
}

export default App;
