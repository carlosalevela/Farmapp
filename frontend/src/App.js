import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import ProductoList from './components/ProductoList';
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import DetallesProducto from './components/DetallesProducto';

function App() {
  const isLoggedIn = !!localStorage.getItem('token'); // Verifica si el usuario está autenticado

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<ProductoList />} />
          <Route path="/productos/:idproducto" element={<DetallesProducto />} /> 
          <Route 
            path="/agregar-producto" 
            element={<ProtectedRoute element={<AgregarProducto />} isAuthenticated={isLoggedIn} />} 
          />
          <Route 
            path="/editar/:id" 
            element={<ProtectedRoute element={<EditarProducto />} isAuthenticated={isLoggedIn} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
