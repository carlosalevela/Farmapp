/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para inventario
 * 
 */

const express = require('express');
const router = express.Router();
const {
    createInventario,
    getInventarios,
    getInventarioById,
    updateInventario,
    deleteInventario,
} = require('../controllers/inventario.controller');

// Ruta para crear un inventario
router.post('/inventarios', createInventario);

// Ruta para obtener todos los inventarios
router.get('/inventarios', getInventarios);

// Ruta para obtener un inventario por ID
router.get('/inventarios/:id', getInventarioById);

// Ruta para actualizar un inventario por ID
router.put('/inventarios/:id', updateInventario);

// Ruta para eliminar un inventario por ID
router.delete('/inventarios/:id', deleteInventario);

module.exports = router;
