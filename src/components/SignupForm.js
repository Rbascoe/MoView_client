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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export const SignupForm = (props) => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
      
     
  const classes = useStyles();

  const handleSubmit = () => {
    props.history.push("/login")
  };

  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
};

  const handleChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
};

const handleChangeAge = (e) => {
    const age = e.target.value;
    setAge(age);
};

const handleChangeBio = (e) => {
    const bio = e.target.value;
    setBio(bio);
};


  const signup = (e) => {
    //   debugger
    e.preventDefault()

    const values = {
        name: name,
        username: username, 
        password: password,
        age: age,
        bio: bio
    };

    fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: values.name,
            username: values.username,
            password: values.password,
            age: values.age,
            bio: values.bio

        })
      })
    .then(res => res.json())
    .then(userInfo => {
      // console.log(userInfo)
      if (userInfo.error)
        alert(userInfo.error)
      else{
        localStorage.token = userInfo.token
              localStorage.id = userInfo.user.id 
              localStorage.username = userInfo.user.username
              localStorage.age = userInfo.user.age
              localStorage.bio = userInfo.user.bio
        
              
              console.log(userInfo)
              props.history.push("/login")
      }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={(e) => 
            signup(e) }
            className={classes.form} noValidate>
            <TextField onChange={handleChangeName}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                autoComplete="name"
                autoFocus
            />
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
            />
            <TextField onChange={handleChangeAge}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                value={age}
                autoComplete="age"
                autoFocus
            />
            <TextField onChange={handleChangeBio}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bio"
            label="Bio"
            name="bio"
            value={bio}
            autoComplete="bio"
            autoFocus
          />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign Up
            </Button>
            <Grid container>
                <Grid item>
                <Link to="/login" href="/login" variant="body2">
                    {"Already an account? Log In"}
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
export default withRouter(SignupForm);