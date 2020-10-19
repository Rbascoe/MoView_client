import React from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Route, withRouter } from 'react-router-dom';
import { MoviePage } from './MoviePage';
import FormRow from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
       maxwidth: 300,
    },
    media: {
      height: 475,
     
    },
  }));

export const MovieCard = (props) => {
    // console.log(props)
    const classes = useStyles();

    const redirectToMoviePage = () => {
        props.history.push(`/movie/${props.id}`)
    }
    return (
        <>
            <Card className={classes.root} color='primary' >
            <CardMedia 
                 className={classes.media}  
                 image={`http://image.tmdb.org/t/p/w200/${props.poster}`} 
                 onClick={redirectToMoviePage}
                 />
            <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                {/* <Typography>
                    {props.plot}
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button onClick={redirectToMoviePage} size="small" color="primary" >
                View
                </Button>
            </CardActions>
            </Card>            
        </>
    )
}

export default withRouter(MovieCard);
