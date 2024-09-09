/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para usuario
 * 
 */

const {Router}=require('express');

const router=Router();


/**
 * Importacion de metodos
 */

const {RegistrarUsuario, IniciarSesion}=require('../controllers/usuario.controller');

/**
 * Rutas
 */

router.post('/', RegistrarUsuario);
router.get('/', IniciarSesion);


module.exports=router;