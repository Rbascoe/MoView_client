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

export const MovieCard = (props) => {
    // console.log(props)

    const redirectToMoviePage = () => {
        props.history.push(`/moviepage`)
    }
    return (
        <div>
            <Container  maxWidth="md">
        
                <Grid container spacing={4}>
                     <Grid item xs={20} sm={6} md={4}> 
                        
                        <Card >
                        <CardMedia/>
                            <img src={`http://image.tmdb.org/t/p/w200/${props.poster}`} />
                    
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                             {props.title}
                            </Typography>
                            <Typography>
                                {props.plot}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={redirectToMoviePage} size="small" color="primary" >
                            View
                            </Button>
                        </CardActions>
                        </Card>
                        
                    </Grid>
                </Grid>
             </Container>    
        </div>
    )
}

export default withRouter(MovieCard);
