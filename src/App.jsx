import { useContext, useEffect } from 'react';
import './App.css'; 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Car from './Car';
import ThemeContext from './context/ThemeContext';
import Checkout from './components/ItemCount/Checkout';

export function App() {
  const { darkTheme } = useContext(ThemeContext);

  
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <div className={darkTheme ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Hola" />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer greeting="Hola" />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/car' element={<Car />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h3>Te perdiste!!</h3>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
