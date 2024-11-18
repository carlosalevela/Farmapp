const { Router } = require('express');
const router = Router();

const {
  AgregarProducto,
  VerProductos,
  VerProducto,
  EliminarProducto,
  EditarProducto
} = require('../controllers/producto.controller');

// Rutas de productos
router.get('/', VerProductos); // Ver todos los productos
router.get('/:idproducto', VerProducto); // Ver un producto por su id
router.post('/', AgregarProducto); // Agregar un nuevo producto
router.put('/:idproducto', EditarProducto); // Editar un producto
router.delete('/:idproducto', EliminarProducto); // Eliminar un producto

module.exports = router;
