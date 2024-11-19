import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../actions/productoActions';
import { Link } from 'react-router-dom';
import '../App.css'; // Importa el archivo CSS

const Inicio = () => {
  const dispatch = useDispatch();
  const { productos, loading, error } = useSelector(state => state.productos);

  useEffect(() => {
    dispatch(fetchProductos());  // Cargar productos al inicio
  }, [dispatch]);

  return (
    <div className="App">
      {/* Header con barra de navegación */}
      <header className="App-header">
        <h1 className="App-title">FARMAPP</h1>
        <div className="nav-buttons">
          <Link to="/productos" className="nav-button">Productos</Link>
          <Link to="/agregar-producto" className="nav-button">Agregar Producto</Link>
        </div>
      </header>

      {/* Contenido de productos */}
      <div className="product-container">
        {loading ? <p>Cargando...</p> : error ? <p>Error: {error}</p> : (
          <div className="product-grid">
            {productos.map(producto => (
              <div key={producto.id} className="product-card">
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <div className="product-actions">
                  <Link to={`/productos/${producto.id}`} className="edit-btn">Ver detalles</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inicio;
