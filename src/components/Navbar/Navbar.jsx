import React from 'react';
import './navbar.css';
import Logo from '../../images/ecell-logo-dark.png';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
  return (
    <div className='navbar navbar-expand-lg flex'>
      <img className='logo' src={Logo} alt='ecell' />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <IconContext.Provider value={{ color: "#FFF", size: '20px' }}>
          <HiOutlineMenuAlt1 />
        </IconContext.Provider>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className='navbar-items flex'>
          <div>Home</div>
          <div>About-Us</div>
          <div>Events</div>
          <div>Contact</div>
        </div>
        <button className='join-button'>Join now</button>
      </div>
    </div>
  );
}
