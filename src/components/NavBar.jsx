
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h2>Tendencia</h2>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
