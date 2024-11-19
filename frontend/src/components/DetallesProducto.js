import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css';

const DetallesProducto = () => {
  const { idproducto } = useParams(); // Obtener el ID del producto desde la URL
  const { productos } = useSelector(state => state.productos); // Obtener productos desde Redux

  // Buscar el producto correspondiente usando el campo 'idproducto'
  const producto = productos.find(prod => prod.idproducto === parseInt(idproducto));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-card">
        <h1>{producto.nombre}</h1>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <p><strong>cantidad:</strong> {producto.cantidad}</p>
        <div className="product-actions">
          <button className="edit-btn">Editar</button>
          <button className="delete-btn">Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default DetallesProducto;
