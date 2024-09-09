/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para producto
 * 
 */

const {Router}=require('express');

const router=Router();


/**
 * Importacion de metodos
 */

const {AgregarProducto, VerProducto, EliminarProducto, EditarProducto, VerProductos}=require('../controllers/producto.controller');

/**
 * Rutas
 */

router.get('/', VerProductos);
router.post('/', AgregarProducto);
router.delete('/', EliminarProducto);
router.put('/', EditarProducto);
router.get('/:id', VerProducto);


module.exports=router;