import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount/ItemCount';
import { useParams } from 'react-router-dom'; 

const ItemDetail = ({ prod }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [currentProductId, setCurrentProductId] = useState(prod.id); 
  
  const mostrarSiguiente = () => {
    
    setCurrentProductId((prevId) => prevId + 1); 
  };

  const mostrarAnterior = () => {
    
    setCurrentProductId((prevId) => prevId - 1); 
  };

  const handleAddToCart = (cant) => {
    const prodConCantidad = { ...prod, cantidad: cant };
    addToCart(prodConCantidad);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-2xl font-bold mb-2 text-center">{prod.nombre}</h3>
        <img className="w-full h-auto rounded-lg mb-4" src={prod.imagen} alt={prod.nombre} />
        <p className="text-xl font-semibold mb-4 text-center">${prod.precio}</p>

        <div className="flex justify-between mb-4">
          
        </div>

        <ItemCount handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
