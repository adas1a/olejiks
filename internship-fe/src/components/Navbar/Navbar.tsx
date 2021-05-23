import React, { FC } from 'react';
import NavButton from './NavButton/NavButton';
import AddNewAdvert from "../AddNewAdvert/AddNewAdvert";



const Navbar:FC = () => (
  <div>
    <NavButton link='/' label='home' />
    <NavButton link='/about' label='about' />
    <NavButton link='/lol' label='Add new advert' ><AddNewAdvert></AddNewAdvert></NavButton>
  </div>
);


export default Navbar;
