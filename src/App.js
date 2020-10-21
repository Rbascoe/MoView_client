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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      type: 'dark'
    }
  }
});

class App extends Component {

  state = {
    moviesArray: [],
    loading: true,
    loggedIn: false
  }

  



  componentDidMount(){
    fetch("http://localhost:3000/api/v1/movies")
    .then(res => res.json())
    .then(movies => this.setState({moviesArray: [...movies], 
      loading: false}))
  }

  login = () => {
    if (localStorage.id){
      this.setState({loggedIn: true})
    }
  }

  logout = () => {
    if (!localStorage.id){
      this.setState({loggedIn: false})
    }
  }

render(){
  return (
      <div style={{backgroundColor: '#495057'}}>
        
        {!this.state.loading?
        <BrowserRouter>
    
        <Header className="header"/>
        {!localStorage.id?
        <NavBar/>:<LoggedInNav logout={this.logout}/>}
          {/* <br></br><br></br><br></br> */}
        <Switch>
          <Route exact path="/home" render={(routerProps) => <MoviesContainer {...routerProps} movies={this.state.moviesArray}/>}/>
        </Switch>
          <Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} />}/>
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} login={this.login}/>}/>
          <Route path="/profile" render={(routerProps) => <UserProfile {...routerProps} />}/>
          
          <Route exact path="/movie/:id" render={(props) => {
            
            console.log(props)
            let id=parseInt(props.match.params.id)
            
            // let movieShow = moviesArray.movies.map(movie => movie)
            let singleMovie = this.state.moviesArray.find(oneMovie => oneMovie.id === id)
            console.log(this.state.moviesArray)
           

             return <MoviePage  
            
            id={singleMovie.id}
             title={singleMovie.title}
             imdb_id={singleMovie.imdb_id}
             plot={singleMovie.plot}
             release_date={singleMovie.release_date}
             poster={singleMovie.poster}
           
             
             
             />}}/>
        </BrowserRouter>:
        <div>...Loading</div>}
      </div>

  )};
          
}

export default App;

