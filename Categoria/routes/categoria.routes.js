/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para categoria
 * 
 */

const {Router}=require('express');

const router=Router();


/**
 * Importacion de metodos
 */

const {ActualizarCategoria, EliminarCategoria, AgregarCategoria, VerCategoria}=require('../controllers/categoria.controller');

/**
 * Rutas
 */

router.get('/', VerCategoria);
router.post('/', AgregarCategoria);
router.put('/:id', ActualizarCategoria);
router.delete('/:id', EliminarCategoria);


module.exports=router;