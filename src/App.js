import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/NavBar';
import MovieBox from './Components/Cards/MovieBox'
import React,{useEffect, useState} from 'react';
import API_URL from './api.env'


API_URL="https://api.themoviedb.org/3/movie/popular?api_key=77acd801b597c4084ac360528aebf8aa"
function App(){

const[movie, setMovie] = useState([]);
useEffect(() => {
  fetch(API_URL)
  .then((res)=>res.json())
  .then(data=>{
    console.log(data)
    setMovie(data.results);
  })
}, [])

return(
  <Router>
   <Navbar />
   <div className='container'>
   {movie.map((movieReq)=><MovieBox key={movieReq} {...movieReq} />)}
   </div>
  </Router>
)
}


export default App;
