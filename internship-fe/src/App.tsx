import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './views/Views';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Views/>
    </BrowserRouter>
  );
}

export default App;
