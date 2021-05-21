import React, { FC } from 'react';
import NavButton from './NavButton/NavButton';




const Navbar:FC = () => (
  <div>
    <NavButton link='/' label='home' />
    <NavButton link='/about' label='about' />
  </div>
);


export default Navbar;
