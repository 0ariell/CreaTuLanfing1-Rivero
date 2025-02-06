// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div>
      <h2>{props.greeting}</h2> {/* Usamos props para el mensaje */}
      <p>Aquí van los productos</p>
    </div>
  );
};

export default ItemListContainer;
