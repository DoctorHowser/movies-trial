import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'

function MovieList(props) {
  let movies = useSelector((state) => state.movies)



  return (
    <>
      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />
      })}
    </>
  )
}

export default MovieList