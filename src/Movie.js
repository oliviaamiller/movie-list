import './App.css';

export default function Movie({ movie, handleDeleteMovie }) {
  return <div
    onClick={() => handleDeleteMovie && handleDeleteMovie(movie.id)}
    className='movie'
    style={{ backgroundColor: movie.color }}>
    <p style={{ color: movie.text }}>{movie.title}</p>
    <p style={{ color: movie.text }}>{movie.director}</p>
    <p style={{ color: movie.text }}>{movie.year}</p>

  </div>;
}
