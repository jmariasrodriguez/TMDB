import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import { Box } from '@mui/material';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Box sx={{paddingRight:"200px", paddingLeft:"200px", bgcolor:"#22214F"}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tv/:id' element={<><h1>TV View</h1></>}/>
      <Route path='/movie/:id' element={<><h1>Movie View</h1></>}/>
    </Routes>
    </Box>
    <Footer/>
    </>
  );
}

export default App;
