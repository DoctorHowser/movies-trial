import React from 'react';
import {ListItem} from '@material-ui/core'

function Genres (props) {
  return (
    props.genres.map(genre => {
      return <ListItem>{genre.name}</ListItem>
    })
  )
}

export default Genres;