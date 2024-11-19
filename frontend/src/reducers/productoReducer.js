// src/reducers/productoReducer.js

import {
    CARGAR_PRODUCTOS,
    OBTENER_PRODUCTOS_EXITO,
    OBTENER_PRODUCTOS_ERROR,
    ADD_PRODUCTO,
    EDIT_PRODUCTO,
    DELETE_PRODUCTO,
  } from '../types/types';
  
  const initialState = {
    productos: [],
    loading: false,
    error: null,
  };
  
  const productoReducer = (state = initialState, action) => {
    switch (action.type) {
      case CARGAR_PRODUCTOS:
        return { ...state, loading: true };
      case OBTENER_PRODUCTOS_EXITO:
        return { ...state, loading: false, productos: action.payload };
      case OBTENER_PRODUCTOS_ERROR:
        return { ...state, loading: false, error: action.payload };
      case ADD_PRODUCTO:
        return { ...state, productos: [...state.productos, action.payload] };  // Agregar el nuevo producto
      case EDIT_PRODUCTO:
        return {
          ...state,
          productos: state.productos.map((producto) =>
            producto.id === action.payload.id ? action.payload : producto
          ),  // Editar el producto existente
        };
      case DELETE_PRODUCTO:
        return {
          ...state,
          productos: state.productos.filter((producto) => producto.id !== action.payload),  // Eliminar el producto
        };
      default:
        return state;
    }
  };
  
  export default productoReducer;
  