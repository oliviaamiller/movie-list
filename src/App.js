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
  const [textFormColor, setTextFormColor] = useState('');

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
      color: movieFormColor,
      text: textFormColor
    };

    setAllMovies([...allMovies, movie]);

    setMovieFormTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('');
    setTextFormColor('');
  }

  function handleDeleteMovie(id) {
    
    const index = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(index, 1);

    setFilteredMovies('');
    setAllMovies([...allMovies]);
  }


  return (
    <div className="App">
      <section className='top'>
        <h2>impermanent<br/>movie<br/>database</h2>
      </section>
      
      <section className='bottom'>
        <div className='left'>
          <Movie 
            movie={{
              title: movieFormTitle, 
              director: movieFormDirector, 
              year: movieFormYearReleased,
              color: movieFormColor,
              text: textFormColor
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
            setMovieFormColor={setMovieFormColor} 
            textFormColor={textFormColor} 
            setTextFormColor={setTextFormColor} />

        </div>

        <div className='right'>
          <div className='search'>
        
            <input 
              placeholder='search by title' 
              value={filtering} 
              onChange={(e) => setFiltering(e.target.value)} />
          </div>

          <MovieList 
            movies={filteredMovies.length ? filteredMovies : allMovies}
            handleDeleteMovie={handleDeleteMovie} /> 
        </div>
      </section>
      
    
    </div>
  );
}
