import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { NAVBAR_TITLES } from './data/constants';
import Movies from './containers/Movies/Movies';
import Tv from './containers/Tv/Tv';

function App() {
  return (
    <>
    <Box container
  direction="column"
  justifyContent="center"
  alignItems="center"sx={{bgcolor:"#22214F"}}>
      <Navbar navbarTitles={NAVBAR_TITLES}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tv' element={<Tv/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/tv/:id' element={<><h1>TV Single View </h1></>}/>
      <Route path='/movies/:id' element={<><h1>Movie Single View</h1></>}/>
      <Route path='/search/:searchValue' element={<h1>Search View</h1>}/>
      <Route path='/userFavorites' element={<><h1>User Favs View</h1></>}/>
    </Routes>
    <Footer/>
    </Box>
    </>
  );
}

export default App;
