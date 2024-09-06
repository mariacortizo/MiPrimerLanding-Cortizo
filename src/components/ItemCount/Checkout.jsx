import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../servicios/firebaseConfig';

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [mail, setMail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [order, setOrder] = useState(null);

    const { cart } = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            nombre,
            mail,
            direccion,
        };

        const data = {
            user,
            productos: cart,
            fecha: new Date(),
        };

        try {
            
            const userId = 'ID_DEL_USUARIO'; 

            
            const userDocRef = doc(db, "usuarios", userId);

            
            const orderRef = collection(userDocRef, "ordenes");

            
            const docRef = await addDoc(orderRef, data);
            setOrder(docRef.id);
            console.log("Orden enviada con éxito, ID:", docRef.id);
        } catch (error) {
            console.error("Error al enviar la orden:", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>
                <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input 
                            id="nombre"
                            type="text" 
                            className='border border-gray-300 rounded-md p-2 w-full text-gray-900' 
                            onChange={(e) => setNombre(e.target.value)} 
                            value={nombre}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mail" className="block text-sm font-medium text-gray-700 mb-1">Mail</label>
                        <input 
                            id="mail"
                            type="email" 
                            className='border border-gray-300 rounded-md p-2 w-full text-gray-900' 
                            onChange={(e) => setMail(e.target.value)} 
                            value={mail}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                        <input 
                            id="direccion"
                            type="text" 
                            className='border border-gray-300 rounded-md p-2 w-full text-gray-900' 
                            onChange={(e) => setDireccion(e.target.value)} 
                            value={direccion}
                            required
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200'
                    >
                        Confirmar
                    </button>
                </form>

                {order && (
                    <div className="mt-4 text-center">
                        <p className="text-green-600">Orden confirmada con el ID: <strong>{order}</strong></p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;
