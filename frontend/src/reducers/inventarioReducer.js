// src/reducers/inventarioReducer.js

const initialState = {
    inventarios: [],
    loading: false,
    error: null,
  };
  
  // Acción de ejemplo: obtener inventarios
  const inventarioReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_INVENTARIOS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_INVENTARIOS_SUCCESS':
        return {
          ...state,
          loading: false,
          inventarios: action.payload,
        };
      case 'FETCH_INVENTARIOS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'ADD_INVENTARIO':
        return {
          ...state,
          inventarios: [...state.inventarios, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default inventarioReducer;
  