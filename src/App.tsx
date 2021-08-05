import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Views from './views/Views';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import NavigationBar from './components/Navbar/NavigationBar';

const App = () => (
    <BrowserRouter>
      <NavigationBar/>
      <Views/>
    </BrowserRouter>
  );

export default App;
