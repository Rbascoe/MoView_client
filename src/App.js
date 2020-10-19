import React, { useState, useEffect, Component } from 'react';
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
import { render } from 'react-dom';


class App extends Component {

  state = {
    moviesArray: [],
    reviews: [],
    loading: true
  }



  componentDidMount(){
    fetch("http://localhost:3000/api/v1/movies")
    .then(res => res.json())
    .then(movies => this.setState({moviesArray: [...movies], loading: false}))
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/reviews")
    .then(res => res.json())
    .then(reviews => this.setState({reviews: reviews}))
  }
render(){
  return (
      <div className="App">
        {this.state.loading?
        <BrowserRouter>
    
        <Header className="header"/>
        {!localStorage.id?
        <NavBar/>:<LoggedInNav/>}
          <br></br><br></br><br></br>
        <Switch>
          <Route exact path="/home" render={(routerProps) => <MoviesContainer {...routerProps} movies={this.state.moviesArray}/>}/>
        </Switch>
          <Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} />}/>
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} />}/>
          <Route path="/profile" render={(routerProps) => <UserProfile {...routerProps} />}/>
          
          <Route exact path="/movie/:id" render={(props) => {
            
            console.log(props)
            let id=parseInt(props.match.params.id)
            
            // let movieShow = moviesArray.movies.map(movie => movie)
            let singleMovie = this.state.moviesArray.find(oneMovie => oneMovie.id === id)
            console.log(this.state.moviesArray)
            let movieReviews = []
            let review = this.state.reviews.map(singleReview => {
              if (singleReview.movie_id === singleMovie.id ){
                movieReviews.push(singleReview)
              }
            })
            console.log(movieReviews)

             return <MoviePage  
            //  movie={singleMovie} 
             title={{title: "singleMovie.title"}}
             imdb_id={{imdb: "singleMovie.imdb_id"}}
             plot={{plot: "singleMovie.plot"}}
             release_date={{release_date: "singleMovie.release_date"}}
             poster={{poster: "singleMovie.poster"}}
             reviews={movieReviews}
             
             
             />}}/>
        </BrowserRouter>:
        <div>...Loading</div>}
      </div>
  )};
          
}

export default App;
