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


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "red !important",
     
    },
    multilineColor:{
      color: 'white'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#e53935',
      contrastText: 'white'
    },
  }));
  

const EditReviewForm = (props) => {

    const [review, setReview] = useState("");
    
      
     
    const classes = useStyles();

//   const handleSubmit = () => {
//     props.history.push("/profile")
//   };

  const handleChangeReview = (e) => {
      console.log(e.target.value)
    const review = e.target.value;
    setReview(review);
  };


  const handleSubmit = (e) => {
      // debugger
    e.preventDefault()

    const reviewInput = review
        
  

    // const movie_id = movie.data.id
    // debugger
    fetch(`http://localhost:3000/api/v1/movies/${props.id}/reviews`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: reviewInput,
            user_id: localStorage.id,
            movie_id: props.id,
            upvotes: 0,
            downvotes: 0
        })
      })
    .then(res => res.json())
    .then(review => console.log(review))

    
  }

  return (
    
    <Container component="main" style={{backgroundColor: '#37474f', width: '400px'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography style={{color:'white'}}component="h1" variant="h5">
          Write a Review
        </Typography>
        <form onSubmit={(e) => 
            handleSubmit(e)}
            className={classes.form} noValidate>
          <TextField onChange={handleChangeReview}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="review"
            label="Review"
            name="review"
            value={review}
            autoFocus
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
            color="primary"
            className={classes.submit}
          >
            Submit Review
          </Button>
          <Grid container>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  
  );
}

export default EditReviewForm