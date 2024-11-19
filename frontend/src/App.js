import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './components/Inicio';
import ProductoList from './components/ProductoList'; 
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <Router>
      <div>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} /> {/* Ruta del menú principal */}
          <Route path="/productos" element={<ProductoList />} /> {/* Ruta para la lista de productos */}
          <Route path="/agregar-producto" element={<AgregarProducto />} /> {/* Ruta para agregar producto */}
          <Route path="/editar/:id" element={<EditarProducto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
