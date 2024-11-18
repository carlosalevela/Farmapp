import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de importar 'react-dom/client' si usas React 18
import { Provider } from 'react-redux'; // Importa Provider desde react-redux
import App from './App';
import store from './store/store'; // Asegúrate de importar correctamente tu store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Aquí se pasa el store a Provider */}
    <App />
  </Provider>
);