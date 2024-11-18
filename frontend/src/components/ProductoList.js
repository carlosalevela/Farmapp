// src/components/ProductoList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Importa hooks de Redux
import { fetchProductos } from '../actions/productoActions';

const ProductoList = () => {
  const dispatch = useDispatch();

  // Obtener el estado de productos del Redux store
  const { productos, loading, error } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(fetchProductos());  // Despacha la acción para obtener productos cuando el componente se monta
  }, [dispatch]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.idproducto}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
