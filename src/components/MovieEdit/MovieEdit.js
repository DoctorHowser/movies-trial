import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography, makeStyles } from '@material-ui/core';
import './MovieEdit.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function MovieEdit(props) {
  const classes = useStyles();
  const [title, changeTitle] = useState('')
  const [description, changeDescription] = useState('')
  const dispatch = useDispatch();
  let id = useSelector((state) => state.currentMovie)

  let handleCancel = () => {
    props.history.push('/detail')
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'UPDATE_MOVIE', payload: { id, title, description } })
    props.history.push('/detail')

  }
  return (
    <>
      <Typography variant="h3" gutterBottom >
        Edit
      </Typography>
      <form onSubmit={handleSubmit} className={classes.container}>
        <TextField className={classes.textField} onChange={(event) => changeTitle(event.target.value)} type="text" label="title" />
        <TextField className={classes.textField} multiline onChange={(event) => changeDescription(event.target.value)} type="text" label="description" />

        <Button className={classes.button} variant="contained" color="primary" type="submit" >SUBMIT CHANGES</Button>
        <Button className={classes.button} variant="contained" onClick={handleCancel} type="button" >Cancel</Button>

      </form>
    </>
  )

}

export default MovieEdit