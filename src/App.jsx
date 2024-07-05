import { useState } from 'react';
import './App.css';


import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer' ;
import CartWidget from './components/CartWidget';
import Button from './components/Button';
import Header from './components/Header';


export function App() {
  return (
   
    <div className="app-container">
       <Header />
      <NavBar />
      <ItemListContainer greeting="Hola" />
      <Button texto="inicio" color="blue"/>
    </div>
  )
}

export default App;
