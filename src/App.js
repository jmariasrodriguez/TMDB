import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { API_URL, NAVBAR_TITLES } from './data/constants';
import Movies from './containers/Movies/Movies';
import Tv from './containers/Tv/Tv';
import SearchView from './containers/Search/Search';
import SingleView from './containers/SingleView/SingleView';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FavoritesView from './containers/Favorites/FavoritesView';

function App() {
//   const [moviesGenres, setMoviesGenres] = useState([]);
//   const [tvGenres, setTvGenres] = useState([]);

//   useEffect(() => {
//     axios
//     .get(
//       `${API_URL.beginningPath}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
//     )
//     .then((genres) => {
//       setMoviesGenres(genres.data.genres);
//     });
//   axios
//     .get(
//       `${API_URL.beginningPath}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
//     )
//     .then((genres) => {
//       setTvGenres(genres.data.genres);
//     });
//   }, [])

// const genres = tvGenres.concat(moviesGenres)
//console.log(genres)

let genres
  
  return (
    <>
    <Box container
  direction="column"
  justifyContent="center"
  alignItems="center"sx={{bgcolor:"#22214F"}}>
      <Navbar navbarTitles={NAVBAR_TITLES}/>
    <Routes>
      <Route path='/' element={<Home genres={genres}/>}/>
      <Route path='/tv' element={<Tv genres={genres}/>}/>
      <Route path='/movies' element={<Movies genres={genres}/>}/>
      <Route path='/tv/:id' element={<SingleView genres={genres}/>}/>
      <Route path='/movie/:id' element={<SingleView genres={genres}/>}/>
      <Route path='/search/:searchValue' element={<SearchView genres={genres}/>}/>
      <Route path='/userFavorites' element={<FavoritesView genres={genres}/>}/>
    </Routes>
    <Footer/>
    </Box>
    </>
  );
}

export default App;
