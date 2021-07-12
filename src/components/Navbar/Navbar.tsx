import React, { FC } from 'react';
import NavButton from './NavButton/NavButton';

const Navbar:FC = () => (
  <div>
    <NavButton link='/' label='home' />
    <NavButton link='/new' label='Add new advert' />
    <NavButton link='/table' label='table' />
  </div>
);

export default Navbar;
