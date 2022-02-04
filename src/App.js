import './App.css';
import { useState } from 'react';
import Movie from './Movie';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function App() {
  return (
    <div className="App">
      <Movie />

      <MovieList />

      <MovieForm />
    
    </div>
  );
}

export default App;
