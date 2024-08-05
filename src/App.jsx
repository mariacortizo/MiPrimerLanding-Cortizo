import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer' ;
import CartWidget from './components/CartWidget';
import Button from './components/Button';
import Header from './components/Header';
import { ItemCount } from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

export function App() {
  return (
   
    <div className="app-container">
      
      <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer greeting="Hola" />} />
      <Route path='/categoria/:categoria' element={<ItemListContainer greeting="Hola" />} />
      <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
      <Route path='*' element={<h3>Te perdiste!!</h3>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
