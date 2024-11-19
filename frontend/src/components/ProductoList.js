// src/components/ProductoList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Importa hooks de Redux
import { useNavigate } from 'react-router-dom';  // Importa useNavigate de React Router
import { fetchProductos, deleteProducto } from '../actions/productoActions';  // Importar las acciones necesarias
import './ProductoList.css'; // Importa los estilos

const ProductoList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Hook para navegación

  // Obtener el estado de productos del Redux store
  const { productos, loading, error } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(fetchProductos());  // Despacha la acción para obtener productos cuando el componente se monta
  }, [dispatch]);

  const handleDelete = (id) => {
    // Llamamos a la acción deleteProducto con el id del producto a eliminar
    dispatch(deleteProducto(id));
  };

  const handleEdit = (id) => {
    // Redirige a la página de edición pasando el id del producto
    navigate(`/editar/${id}`);
  };

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-list-container">
      <h1>Lista de Productos</h1>
      <div className="product-grid">
        {productos.map((producto) => (
          <div className="product-card" key={producto.idproducto}>
            <h3>{producto.nombre}</h3>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Cantidad:</strong> {producto.cantidad}</p>
            <p>{producto.descripcion}</p>

            {/* Botones de Editar y Eliminar */}
            <div className="product-actions">
              <button className="edit-btn" onClick={() => handleEdit(producto.idproducto)}>Editar</button>
              <button className="delete-btn" onClick={() => handleDelete(producto.idproducto)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductoList;
