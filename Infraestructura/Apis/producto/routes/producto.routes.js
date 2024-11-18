/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * Rutas para el manejo de productos.
 */

const { Router } = require('express');
const router = Router();

/**
 * Importación de métodos
 */
const { AgregarProducto, VerProducto, EliminarProducto, EditarProducto, VerProductos } = require('../controllers/producto.controller');

/**
 * Rutas
 */

// Ver todos los productos
router.get('/', VerProductos);

// Agregar un nuevo producto
router.post('/', AgregarProducto);

// Eliminar un producto por su ID
router.delete('/:idproducto', EliminarProducto);

// Editar un producto por su ID
router.put('/:idproducto', EditarProducto);

// Ver un producto por su ID
router.get('/:idproducto', VerProducto);

module.exports = router;
