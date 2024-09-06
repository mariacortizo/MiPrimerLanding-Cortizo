import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {
  
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className='grid grid-cols-1 gap-4 bg-cyan-50 p-6 border border-gray-300 rounded-lg shadow-lg'>
      <h3 className='text-center text-xl font-bold'>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} className='w-full h-auto' />
      <p className='text-lg font-semibold'>${producto.precio}</p>
      <p className='text-md font-medium'>Categoría: {producto.categoria}</p>

      
      <div className='mb-4'>
        <label htmlFor='size' className='block text-md font-medium mb-2'>Talle:</label>
        <select
          id='size'
          value={selectedSize}
          onChange={handleSizeChange}
          className='border border-gray-300 rounded-md p-2 w-full'
        >
          <option value=''>Seleccionar talle</option>
          
          {producto.talle && producto.talle.map((talle, index) => (
            <option key={index} value={talle}>
              {talle}
            </option>
          ))}
        </select>
      </div>

      <Link to={`/detalle/${producto.id}`}>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
          Ver Detalles
        </button>
      </Link>
    </div>
  );
};

export default Item;
