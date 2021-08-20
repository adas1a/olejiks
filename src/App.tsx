import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Views from './views/Views';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import NavigationBar from './components/Navbar/NavigationBar';
import { initAxios } from './utils/initAxios/initAxios';
import 'react-toastify/dist/ReactToastify.css';

initAxios();
const App = () => (
    <BrowserRouter>
      <NavigationBar/>
      <Views/>
      <ToastContainer/>
    </BrowserRouter>
  );

export default App;
