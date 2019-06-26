import React from 'react';

function Genres (props) {
  return (
    props.genres.map(genre => {
      return <li>{genre.name}</li>
    })
  )
}

export default Genres;