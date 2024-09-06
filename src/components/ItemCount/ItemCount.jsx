import React, { useState } from 'react';
import Button from '../Button';
import './ItemCount.css';

export const ItemCount = ({ handleAddToCart }) => {
  const [count, setCount] = useState(1);

  const restar = () => {
    setCount(prevCount => Math.max(1, prevCount - 1)); 
  };

  const sumar = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 shadow-lg rounded-lg">
      
      <button 
        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
        onClick={restar}
      >
        -
      </button>

    
      <p className="text-lg font-semibold">{count}</p>

      
      <button 
        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
        onClick={sumar}
      >
        +
      </button>

      
      <button 
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
        onClick={() => handleAddToCart(count)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};
