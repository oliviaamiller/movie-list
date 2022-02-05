import './App.css';

export default function MovieForm({ submitMovie,
  movieFormTitle,
  setMovieFormTitle,
  movieFormDirector,
  setMovieFormDirector,
  movieFormYearReleased,
  setMovieFormYearReleased,
  movieFormColor,
  setMovieFormColor, 
  textFormColor,
  setTextFormColor }) {

  return <div className='movie-form-container'>
    <form className='movie-form' onSubmit={submitMovie}>
      <input placeholder='title' required value={movieFormTitle} onChange={(e) => setMovieFormTitle(e.target.value)} />
      <input placeholder='director' required value={movieFormDirector} onChange={(e) => setMovieFormDirector(e.target.value)} />
      <input placeholder='year released' required value={movieFormYearReleased} onChange={(e) => setMovieFormYearReleased(e.target.value)} />
      <select required value={movieFormColor} onChange={(e) => setMovieFormColor(e.target.value)} >
        <option value=''>background color</option>
        <option value='red'>red</option>
        <option value='yellow'>yellow</option>
        <option value='blue'>blue</option>
        <option value='green'>green</option>
      </select>
      <select required value={textFormColor} onChange={(e) => setTextFormColor(e.target.value)} >
        <option value=''>text color</option>
        <option value='pink'>pink</option>
        <option value='black'>black</option>
        <option value='white'>white</option>
      </select>
      <button>submit</button>
    </form>
  </div>;
}
