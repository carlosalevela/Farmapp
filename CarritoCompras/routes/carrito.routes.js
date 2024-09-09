/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para carrito
 * 
 */

const {Router}=require('express');

const router=Router();


/**
 * Importacion de metodos
 */

const {AplicarDescuento, GenerarRecibo, RealizarPago}=require('../controllers/carrito.controller');

/**
 * Rutas
 */

router.get('/', AplicarDescuento);
router.get('/', GenerarRecibo);
router.get('/', RealizarPago);



module.exports=router;