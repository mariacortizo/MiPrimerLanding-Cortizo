
import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ThemeContext from '../context/ThemeContext';

const NavBar = () => {
    const { mensajito } = useContext(CartContext);
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-700 text-white">
            <div className="flex space-x-4">
                <Link to="/" className="font-bold italic hover:text-blue-500 transition duration-300">Inicio</Link>
                <Link to="/categoria/pantalones" className="font-bold italic hover:text-blue-500 transition duration-300">Pantalones</Link>
                <Link to="/categoria/remeras" className="font-bold italic hover:text-blue-500 transition duration-300">Remeras</Link>
                <Link to="/categoria/sacos" className="font-bold italic hover:text-blue-500 transition duration-300">Sacos</Link>
                <Link to="/categoria/sweters" className="font-bold italic hover:text-blue-500 transition duration-300">Sweters</Link>
                <Link to="/categoria/vestidos" className="font-bold italic hover:text-blue-500 transition duration-300">Vestidos</Link>
            </div>

            <h2 className="text-xl font-bold">Tendencia</h2>

            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setDarkTheme(!darkTheme)}
                    className="font-bold italic px-4 py-2 bg-slate-600 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    {darkTheme ? "Tema Claro" : "Tema Oscuro"}
                </button>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
