
import React from 'react';
import CartWidget from './CartWidget';
import "./navbar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            
            
            <Link to="/"> Inicio </Link>
            <Link to="/categoria/pantalones">Pantalones</Link>
            <Link to="/categoria/remeras">Remeras</Link>
            <Link to="/categoria/sacos">Sacos</Link>
            <Link to="/categoria/sweters">Sweters</Link>
            <Link to="/categoria/vestidos">Vestidos</Link>
            <h2 className='titulo'>Tendencia</h2>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
