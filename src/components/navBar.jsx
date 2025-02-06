// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';  // Importar el widget del carrito

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>Logo de la Tienda</h1>
      </div>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />  {/* Aquí renderizamos el CartWidget */}
    </nav>
  );
};

export default NavBar;
