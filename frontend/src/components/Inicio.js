import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../actions/productoActions';
import { Link } from 'react-router-dom'; 
import '../App.css'; // Importa el archivo CSS

const Inicio = () => {
  const dispatch = useDispatch();
  const { productos, loading, error } = useSelector(state => state.productos);

  // Estado para controlar el modal
  const [modalProducto, setModalProducto] = useState(null);

  // Función para abrir el modal con el producto seleccionado
  const handleOpenModal = (producto) => {
    setModalProducto(producto);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalProducto(null);
  };

  // Cargar productos al inicio
  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  return (
    <div className="App">
      {/* Header con barra de navegación */}
      <header className="App-header">
        <h1 className="App-title">FARMAPP</h1>
        <div className="nav-buttons">
          <Link to="/productos" className="nav-button">Productos</Link>
          <Link to="/agregar-producto" className="nav-button">Agregar Producto</Link>
          <Link to="/login" className="nav-button">Iniciar Sesión</Link>
        </div>
      </header>

      {/* Contenido de productos */}
      <div className="product-container">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="product-grid">
            {productos.map(producto => (
              <div key={producto.idproducto} className="product-card">
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <div className="product-actions">
                  {/* Mostrar el modal al hacer clic */}
                  <button onClick={() => handleOpenModal(producto)} className="edit-btn">Ver detalles</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de detalles del producto */}
      {modalProducto && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>{modalProducto.nombre}</h1>
            <p><strong>Precio:</strong> ${modalProducto.precio}</p>
            <p><strong>Descripción:</strong> {modalProducto.descripcion}</p>
            <p><strong>Cantidad:</strong> {modalProducto.cantidad}</p>
            <button className="close-btn" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
