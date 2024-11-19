import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducto } from '../actions/productoActions';
import { fetchProductos } from '../actions/productoActions'; // Asegúrate de importar la acción para cargar productos

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
    <div>
      <h1>Agregar Nuevo Producto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          placeholder="Nombre del Producto"
        />
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          placeholder="Precio"
        />
        <input
          type="number"
          name="cantidad"
          value={producto.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
        />
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
