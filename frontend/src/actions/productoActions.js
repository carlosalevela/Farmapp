// src/actions/productoActions.js
import axios from 'axios';  // Para hacer solicitudes HTTP (si estás usando axios)

const API_URL = 'http://localhost:3001/producto';  // Cambia esto por la URL de tu API

// Acción para obtener todos los productos
export const fetchProductos = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTOS_REQUEST' });

  try {
    const response = await axios.get(API_URL); // Hacer la solicitud GET a la API
    dispatch({
      type: 'FETCH_PRODUCTOS_SUCCESS',
      payload: response.data,  // Los productos obtenidos
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_PRODUCTOS_FAILURE',
      payload: error.message,  // Error de la solicitud
    });
  }
};

// Acción para agregar un nuevo producto
export const addProducto = (producto) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, producto);  // Enviar el nuevo producto a la API
    dispatch({
      type: 'ADD_PRODUCTO',
      payload: response.data,  // El nuevo producto agregado
    });
  } catch (error) {
    console.error('Error al agregar producto:', error);
  }
};
