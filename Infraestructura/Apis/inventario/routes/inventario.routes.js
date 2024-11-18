/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para inventario
 * 
 */

const { Router } = require('express');
const {
    AgregarInventario,
    VerInventarios,
    VerInventario,
    EliminarInventario,
    EditarInventario,
} = require('../controllers/inventario.controller');

const router = Router();

// Ruta para agregar un inventario
router.post('/', AgregarInventario);

// Ruta para ver todos los inventarios
router.get('/', VerInventarios);

// Ruta para ver un inventario por su id
router.get('/:id', VerInventario);

// Ruta para eliminar un inventario por su id
router.delete('/:id', EliminarInventario);

// Ruta para editar un inventario por su id
router.put('/:id', EditarInventario);

module.exports = router;
