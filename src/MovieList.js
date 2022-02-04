import Movie from './Movie';


export default function MovieList({ movies, handleDeleteMovie }) {
  return <div className='movie-list'>
    {movies.map((movie, i) =>
      <Movie key={`${movie}-${i}`} movie={movie} handleDeleteMovie={handleDeleteMovie} />)}
  </div>;
}
