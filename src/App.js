import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { NAVBAR_TITLES } from './data/constants';

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
      <Route path='/tv' element={<><h1>TV View</h1></>}/>
      <Route path='/movies' element={<><h1>Movies View</h1></>}/>
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
