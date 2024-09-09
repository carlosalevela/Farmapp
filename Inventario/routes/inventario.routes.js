/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para inventario
 * 
 */

const {Router}=require('express');

const router=Router();


/**
 * Importacion de metodos
 */

const {ConfirmarDisponibilidad, ActualizarCantidad}=require('../controllers/inventario.controller');

/**
 * Rutas
 */

router.get('/', ConfirmarDisponibilidad);
router.put('/', ActualizarCantidad);


module.exports=router;