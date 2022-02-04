import './App.css';

export default function MovieForm({ submitMovie,
  movieFormTitle,
  setMovieFormTitle,
  movieFormDirector,
  setMovieFormDirector,
  movieFormYearReleased,
  setMovieFormYearReleased,
  movieFormColor,
  setMovieFormColor }) {
  return <div>
    <form className='movie-form'>
      <input placeholder='title'/>
      <input placeholder='director' />
      <input placeholder='year released' />
      <select>
        <option>red</option>
        <option>yellow</option>
        <option>blue</option>
        <option>green</option>
      </select>
      <button>submit</button>
    </form>
    

  </div>;
}
