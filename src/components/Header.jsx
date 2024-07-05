import React from 'react';
import './Header.css'; 
import logo from '../assets/logo.avif';

const Header = () => {
  return (
    <header className="header">
      <img className='logo' src={logo} alt="Logo" />
      
    </header>
  );
};

export default Header;
