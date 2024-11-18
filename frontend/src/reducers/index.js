// src/reducers/index.js
import { combineReducers } from 'redux';
import productoReducer from './productoReducer';  // Reducer para los productos
import inventarioReducer from './inventarioReducer'; // Reducer para los inventarios

const rootReducer = combineReducers({
  productos: productoReducer,  // Maneja el estado de los productos
  inventarios: inventarioReducer, // Maneja el estado de los inventarios
});

export default rootReducer;
