import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Views from './views/Views';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import NavigationBar from './components/Navbar/NavigationBar';

// Todo move to separate file /utils/initAxios + interceptor

axios.defaults.baseURL='api/';
const accessToken = localStorage.getItem('token');
if (accessToken){
  axios.defaults.headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
}

const App = () => (
    <BrowserRouter>
      <NavigationBar/>
      <Views/>
    </BrowserRouter>
  );

export default App;
