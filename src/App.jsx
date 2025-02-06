// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';  // Importamos NavBar
import ItemListContainer from './components/ItemListContainer';  // Importamos ItemListContainer

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" /> {/* Enviamos el mensaje a ItemListContainer */}
    </div>
  );
};

export default App;
