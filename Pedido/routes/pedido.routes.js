/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para pedido
 * 
 */

const {Router}=require('express');

const router=Router();


/**
 * Importacion de metodos
 */

const {AgregarPedido, ActualizarPedido, EditarFecha, CancelarPedido, ConfirmarPedido, VerPedido}=require('../controllers/pedido.controller');

/**
 * Rutas
 */

router.get('/', ConfirmarPedido);
router.post('/', AgregarPedido);
router.delete('/', CancelarPedido);
router.put('/', ActualizarPedido);
router.put('/', EditarFecha);
router.get('/:id', VerPedido);


module.exports=router;