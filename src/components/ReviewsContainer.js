import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: '#e53935',
      contrastText: 'white',
    //   align: 'right'
    },
        
  }));
  
  
const ReviewsContainer = (props) => {
    // console.log(props)
    const classes = useStyles();
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {props.reviews.map(review => <li><b>{review.content}</b><br></br>
                <Button className={classes.button}>Edit</Button>
                <Button className={classes.button}>Delete</Button></li>)}
            </ul>
        </div>
    )
}

export default ReviewsContainer
