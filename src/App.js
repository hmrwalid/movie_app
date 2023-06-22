import { useState } from 'react';
import './App.css';
import Search from './components/Header/Search';
import Movies from './components/Movies/Movies';
import {MoviesList} from "./MoviesList"
function App() {
 const [movieList, setMovieLlist]= useState(MoviesList)
 const [searchByNyame, setsearchByNyame] = useState("")
 const [searchByRate, setsearchByRate] = useState(1)

  return (
    <div className='app'>
      <h3>Movie_App</h3>
      <Search 
      setsearchByNyame= {setsearchByNyame} 
      searchByRate={searchByRate}
      setsearchByRate={setsearchByRate}
      />
      <Movies movieList ={movieList} 
      searchByNyame= {searchByNyame}
      searchByRate={searchByRate}
      />
    </div>
  );
}

export default App;
