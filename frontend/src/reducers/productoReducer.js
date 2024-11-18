// src/reducers/productoReducer.js

const initialState = {
    productos: [],
    loading: false,
    error: null,
  };
  
  // Acción de ejemplo: obtener productos
  const productoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTOS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_PRODUCTOS_SUCCESS':
        return {
          ...state,
          loading: false,
          productos: action.payload, // Actualiza el estado con los productos obtenidos
        };
      case 'FETCH_PRODUCTOS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload, // Guarda el error si la carga falla
        };
      case 'ADD_PRODUCTO':
        return {
          ...state,
          productos: [...state.productos, action.payload], // Agrega un nuevo producto al array
        };
      default:
        return state;
    }
  };
  
  export default productoReducer;
  