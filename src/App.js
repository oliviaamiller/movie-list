import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import MovieList from './MovieList';
import MovieForm from './MovieForm';


export default function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [filtering, setFiltering] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  useEffect(() => {
    const filteredMovies = allMovies.filter(movie => movie.title.includes(filtering));

    setFilteredMovies(filteredMovies);
  }, [filtering, allMovies]);

  function submitMovie(e) {
    e.preventDefault();

    const movie = {
      id: Math.floor(Math.random() * 1000),
      title: movieFormTitle, 
      director: movieFormDirector, 
      year: movieFormYearReleased,
      color: movieFormColor
    };

    setAllMovies([...allMovies, movie]);

    setMovieFormTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('');
  }

  function handleDeleteMovie(id) {
    
    const index = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(index, 1);

    setFilteredMovies('');
    setAllMovies([...allMovies]);
  }


  return (
    <div className="App">
      <div className='left'>
        <p>Add a Movie</p>
        <Movie 
          movie={{
            title: movieFormTitle, 
            director: movieFormDirector, 
            year: movieFormYearReleased,
            color: movieFormColor
          }} />
      
        <MovieForm 
          submitMovie={submitMovie}
          movieFormTitle={movieFormTitle}
          setMovieFormTitle={setMovieFormTitle}
          movieFormDirector={movieFormDirector}
          setMovieFormDirector={setMovieFormDirector}
          movieFormYearReleased={movieFormYearReleased}
          setMovieFormYearReleased={setMovieFormYearReleased}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor} />
      </div>

      <div className='right'>
        <p>Search Movies</p>

        <input 
          placeholder='search by title' 
          value={filtering} 
          onChange={(e) => setFiltering(e.target.value)} />
          
        <MovieList 
          movies={filteredMovies.length ? filteredMovies : allMovies}
          handleDeleteMovie={handleDeleteMovie} /> 
      </div>
      
    
    </div>
  );
}
