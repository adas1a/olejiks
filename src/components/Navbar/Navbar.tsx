import React, { FC } from 'react';
import NavButton from './NavButton/NavButton';

const Navbar:FC = () => (
  <div>
    <NavButton link='/' label='home' />
    <NavButton link='/new' label='Add new advert' />
    <NavButton link='/table' label='table' />
    <NavButton label='register' link='register'/>
    <NavButton label='login' link='login'/>
  </div>
);

export default Navbar;
