import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Componente para proteger rutas.
 * @param {Object} props
 * @param {React.Component} props.element - El componente que se renderiza si está autenticado.
 * @param {boolean} props.isAuthenticated - Si el usuario está autenticado.
 */
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
