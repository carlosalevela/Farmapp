// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from '../reducers';  // Asegúrate de importar el rootReducer combinado

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // Usamos thunk para las acciones asíncronas
);

export default store;
