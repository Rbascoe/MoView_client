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
})
);
  
  
const ReviewsContainer = (props) => {
    console.log(props)

//     const deleteReview = (id) => {
//         console.log(id)
//         fetch(`http://localhost:3000/api/v1/movies/${props.movieId}/reviews/${props.reviews.id}`,{
//             method: "DELETE",
//             headers: {
//                 Authorization: `Bearer ${localStorage.token}`
//             }})
//         .then(() => {
//             alert("Review successfully deleted");
//               props.reviews.filter((rev) => rev.id !== id)  
//         })
//   }
    const classes = useStyles();

    // const editBtn = localStorage.id?
    //     <Button className={classes.button}>Edit</Button>:
    //     null
    // const deleteBtn = localStorage.id?
    // <Button id={props.reviews.id} className={classes.button} onClick={deleteReview}>Delete</Button> :
    //     null

    return (
        <div border='right'>
            <h2 style={{color: 'white'}}>Reviews</h2>
            <List style={{backgroundColor: '#37474f'}}>
                {props.reviews.map(review => <ListItem><ListItemText style={{color: 'white'}}><b>- "{review.content}"</b><br></br>
                {/* {editBtn}
                {deleteBtn} */}
                </ListItemText></ListItem>)}
       
            </List>
        </div>
    )
}

export default ReviewsContainer
