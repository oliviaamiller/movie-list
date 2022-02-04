import './App.css';
import { useState } from 'react';
import Movie from './Movie';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import userEvent from '@testing-library/user-event';

function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState([]);
  const [movieFormDirector, setMovieFormDirector] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieFormColor, setMovieFormColor] = useState([]);

  function submitMovie(e) {
    e.preventDefault();

    const movie = {
      id: Math.floor(Math.random() * 1000),
      title: movieTitle, 
      director: movieFormDirector, 
      year: movieFormYearReleased,
      color: movieFormColor
    };

    setAllMovies([...allMovies, movie]);

    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('');
  }

  function handleDeleteMovie(id) {
    
    const index = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(index, 1);
    
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {

    const filteredMovies = allMovies.filter(movie => movie.title.includes(search));

    { search ? setFilteredMovies([...filteredMovies]) : setFilteredMovies([...allMovies]); }
  }



  return (
    <div className="App">
      <Movie />

      <MovieList />

      <MovieForm />
    
    </div>
  );
}

export default App;
