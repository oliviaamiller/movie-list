import React from 'react';

export default function Movie({ movie }) {
  return <div className='movie' style={{ backgroundColor: movie.color }} >
    <p>{movie.title}</p>
    <p>{movie.director}</p>
    <p>{movie.year}</p>

  </div>;
}
