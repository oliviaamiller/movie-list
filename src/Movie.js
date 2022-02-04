import './App.css';

export default function Movie({ movie, handleDeleteMovie }) {
  return <div
    onClick={() => handleDeleteMovie && handleDeleteMovie(movie.id)}
    className='movie'
    style={{ backgroundColor: movie.color }}>
    <p>{movie.title}</p>
    <p>{movie.director}</p>
    <p>{movie.year}</p>

  </div>;
}
