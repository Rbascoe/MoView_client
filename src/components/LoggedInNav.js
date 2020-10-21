import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Route, withRouter } from 'react-router-dom';
// import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.primary.contrastText
     
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const LoggedInNav = (props) => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <h5>Welcome, {localStorage.username}</h5>
          </Typography>
         
          <Button onClick={(e) => props.history.push("/home")} color="inherit">Home</Button>
          <Button onClick={(e) => props.history.push("/profile")} color="inherit">Profile</Button>
          <Button onClick={(e) => {
            localStorage.clear()
            console.log(localStorage)
            props.logout()
            props.history.push("/home")}} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(LoggedInNav);