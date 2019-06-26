import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TextField } from '@material-ui/core';
function MovieEdit(props) {
  const [title, changeTitle] = useState('')
  const [description, changeDescription] = useState('')
  const dispatch = useDispatch();
  let id = useSelector((state) => state.currentMovie)

  let handleCancel = () => {
    props.history.push('/detail')
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: 'UPDATE_MOVIE', payload : {id, title, description}})
    props.history.push('/detail')

  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={(event) => changeTitle(event.target.value)} type="text" label="title"/>
      <TextField multiline onChange={(event) => changeDescription(event.target.value)} type="text" label="description"/>
      
      <Button type="submit" >SUBMIT CHANGES</Button>
      <Button onClick={handleCancel} type="button" >Cancel</Button>

    </form>
  )

}

export default MovieEdit