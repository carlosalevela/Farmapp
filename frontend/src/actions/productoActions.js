import axios from 'axios';
import {
  CARGAR_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  ADD_PRODUCTO,
  EDIT_PRODUCTO,
  DELETE_PRODUCTO,
} from '../types/types';

const API_URL = 'http://localhost:3002/producto';  // Cambia esto por la URL de tu API

export const fetchProductos = () => async (dispatch) => {
  dispatch({ type: CARGAR_PRODUCTOS });

  try {
    const response = await axios.get(API_URL);  // Realiza la solicitud GET
    dispatch({
      type: OBTENER_PRODUCTOS_EXITO,
      payload: response.data,  // Los productos obtenidos
    });
  } catch (error) {
    dispatch({
      type: OBTENER_PRODUCTOS_ERROR,
      payload: error.message,  // Error en la solicitud
    });
  }
};

// Acción para obtener todos los productos
export const obtenerProductos = () => async (dispatch) => {
  dispatch({ type: CARGAR_PRODUCTOS });  // Acción para indicar que estamos cargando productos

  try {
    const response = await axios.get(API_URL);  // Realizar solicitud GET
    dispatch({
      type: OBTENER_PRODUCTOS_EXITO,  // Acción de éxito
      payload: response.data,  // Los productos obtenidos de la API
    });
  } catch (error) {
    dispatch({
      type: OBTENER_PRODUCTOS_ERROR,  // Acción de error
      payload: error.message,  // Error en la solicitud
    });
  }
};

// Acción para agregar un nuevo producto
export const addProducto = (producto) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, producto);  // Solicitud POST para agregar un producto
    dispatch({
      type: ADD_PRODUCTO,
      payload: response.data.producto,  // El nuevo producto agregado
    });
  } catch (error) {
    console.error('Error al agregar el producto:', error);
  }
};

// Acción para editar un producto existente
export const editProducto = (id, producto) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, producto);  // Solicitud PUT para editar el producto
    dispatch({
      type: EDIT_PRODUCTO,
      payload: response.data,  // El producto editado
    });
  } catch (error) {
    console.error('Error al editar producto:', error);
  }
};

// Acción para eliminar un producto
export const deleteProducto = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);  // Solicitud DELETE para eliminar el producto
    dispatch({
      type: DELETE_PRODUCTO,
      payload: id,  // El ID del producto que se eliminó
    });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
  }
};
