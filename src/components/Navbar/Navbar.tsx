import React, { FC } from 'react';
import NavButton from './NavButton/NavButton';

const Navbar:FC = () => (
  <div>
    <NavButton link='/' label='home' />
    <NavButton link='/new' label='Add new advert' />
  </div>
);


export default Navbar;
