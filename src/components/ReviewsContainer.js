import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: '#e53935',
      contrastText: 'white',
      borderRightWidth: "1px"
    },
        
  }));
  
  
const ReviewsContainer = (props) => {
    // console.log(props)
    const classes = useStyles();
    return (
        <div border='right'>
            <h2 style={{color: 'white'}}>Reviews</h2>
            <List style={{backgroundColor: '#37474f'}}>
                
                {props.reviews.map(review => <ListItem><ListItemText style={{color: 'white'}}><b>{review.content}</b><br></br>
                <Button className={classes.button}>Edit</Button>
                <Button className={classes.button}>Delete</Button></ListItemText></ListItem>)}
       
            </List>
        </div>
    )
}

export default ReviewsContainer
