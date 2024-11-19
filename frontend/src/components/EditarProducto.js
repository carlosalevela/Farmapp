// src/components/EditarProducto.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; // useParams para obtener el id del producto
import { fetchProductos, editProducto } from '../actions/productoActions'; // Importar acciones necesarias

const EditarProducto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();  // Obtener el id desde la URL
  const { productos } = useSelector((state) => state.productos);  // Obtener productos del estado Redux
  
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    cantidad: '',
    descripcion: ''
  });

  useEffect(() => {
    // Buscar el producto por id para cargar los datos actuales
    const productoEditar = productos.find((p) => p.idproducto === parseInt(id));
    if (productoEditar) {
      setProducto({
        nombre: productoEditar.nombre,
        precio: productoEditar.precio,
        cantidad: productoEditar.cantidad,
        descripcion: productoEditar.descripcion
      });
    } else {
      // Si el producto no existe, redirigir a la lista
      navigate('/');
    }
  }, [id, productos, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviar los datos editados al backend
    dispatch(editProducto(id, producto)).then(() => {
      // Después de editar, recargar la lista de productos
      dispatch(fetchProductos());
      // Redirigir a la lista de productos después de editar
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Editar Producto</h1>
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
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarProducto;
