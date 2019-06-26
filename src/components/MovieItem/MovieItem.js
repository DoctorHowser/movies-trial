import React from 'react';
import './MovieItem.css';

import {
  Card,
  Typography,  
  CardActions, 
  CardHeader, 
  CardMedia, 
  CardContent,
  Button } from '@material-ui/core';
  import {withRouter} from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'

function MovieItem(props) {
  let dispatch = useDispatch()
  
  let handleClick = () => {
    dispatch({type: 'FETCH_MOVIE', payload: props.movie.id});
    props.history.push('/detail')
  }

  let handleEditClick = () => {
    props.history.push('/edit')
  }

  console.log(props)
  return(
    <Card>
      <CardHeader title={props.movie.title} />
      {/* <CardMedia
        className="card_img"
        image="images/titanic.jpg"
        title={props.movie.title}
      /> */}
      <img src={props.movie.poster}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.movie.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small" color="primary">
          Learn More
        </Button>
        {props.editable && <Button onClick={handleEditClick} size="small" color="primary">
          Edit
        </Button>}
      </CardActions>
    </Card>
  )

}
export default withRouter(MovieItem)