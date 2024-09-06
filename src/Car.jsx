import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import CartItem from './components/ItemCount/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, vaciarCart } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
        
          <div className="space-y-6">
            {cart.map(e => (
              <CartItem key={e.id} producto={e} />
            ))}
          </div>

          
          <div className="flex justify-between items-center mt-6">
            <button 
              onClick={vaciarCart} 
              className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition"
            >
              Vaciar Carrito
            </button>

            
            <Link 
              to='/checkout' 
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
            >
              Terminar Compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
