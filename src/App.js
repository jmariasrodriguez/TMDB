import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <>
    <Box sx={{paddingRight:"200px", paddingLeft:"200px"}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </Box>
    </>
  );
}

export default App;
