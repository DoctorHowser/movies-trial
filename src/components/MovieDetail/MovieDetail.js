import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem';
import Genres from '../Genres/Genres'
import { Button, List } from '@material-ui/core';

function MovieDetail(props) {
  let dispatch = useDispatch()
  let selectedMovieGenres = useSelector((state) => state.genres)
  let selectedMovieId = useSelector((state) => state.currentMovie)
  let movies = useSelector((state) => state.movies)

  // useEffect(() => {
  //   dispatch({type: 'FETCH_MOVIES'})
  // }, [])

  console.log(selectedMovieId, movies)
  let [currentMovie] = movies.filter(movie => movie.id === selectedMovieId)
  console.log(currentMovie)
  return (
    <>
      <Button onClick={() => props.history.push('/')}>Back</Button>
      <MovieItem movie={currentMovie} editable />
      <List>
        <Genres genres={selectedMovieGenres} />
      </List>
    </>
  )
}

export default MovieDetail