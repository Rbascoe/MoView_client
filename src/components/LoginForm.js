import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { red } from '@material-ui/core/colors/red';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "red !important"
  },
  multilineColor:{
    color: 'white'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#e53935',
    contrastText: 'white'
  },
  link: {
    color: '#c62828'
  }
    
    
}));


export const LoginForm = (props) => {


  const classes = useStyles();

  const [current_user, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
      
    

//   const handleSubmit = () => {
//     props.history.push("/profile")
//   };

  const handleChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
};


  const login = (e) => {
    e.preventDefault()

    const values = {
        username: username, 
        password: password
    };

    fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: values.username,
            password: values.password
        })
      })
    .then(res => res.json())
    .then(userInfo => {
      localStorage.token = userInfo.token
            localStorage.id = userInfo.user.id 
            localStorage.username = userInfo.user.username
            localStorage.name = userInfo.user.name
            localStorage.age = userInfo.user.age
            localStorage.bio = userInfo.user.bio
            localStorage.loggedIn = true  
            setCurrentUser({
              currentUser: userInfo.user
            }) 
            setLoggedIn({
              loggedIn: true
            }) 
            
            // console.log(userInfo)
            props.login()
            props.history.push("/profile")
    })
  }

  return (
    <Container component="main" maxWidth="xs" style={{backgroundColor: '#37474f'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color:'white'}}>
          Log in
        </Typography>
        <form onSubmit={(e) => 
            login(e)}
            className={classes.form} noValidate>
          <TextField onChange={handleChangeUsername}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            autoComplete="username"
            autoFocus
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                input: classes.multilineColor
              }
            }}
          />
          <TextField onChange={handleChangePassword}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                input: classes.multilineColor
              }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            style={{color:'white'}}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link className={classes.link} to="/signup" href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default withRouter(LoginForm);