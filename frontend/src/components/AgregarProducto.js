import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducto, fetchProductos } from '../actions/productoActions'; // Asegúrate de importar ambas acciones
import './AgregarProducto.css';


const AgregarProducto = () => {
  const dispatch = useDispatch();
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    cantidad: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar el producto al backend
    dispatch(addProducto(producto)).then(() => {
      // Después de agregar, recargar la lista de productos
      dispatch(fetchProductos());
    });

    // Limpiar el formulario después de agregar
    setProducto({
      nombre: '',
      precio: '',
      cantidad: '',
      descripcion: ''
    });
  };

  return (
    <div className="agregar-producto-container">
      <h1>Agregar Nuevo Producto</h1>
      <form onSubmit={handleSubmit} className="agregar-producto-form">
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          placeholder="Nombre del Producto"
          required
        />
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          placeholder="Precio"
          required
        />
        <input
          type="number"
          name="cantidad"
          value={producto.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
          required
        />
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          rows="4"
          required
        />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
