/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * rutas para personas
 * 
 */

const {Router}=require('express');

const router=Router();


/**
 * Importacion de metodos
 */

const {RegistrarPerson, IniciarSesion}=require('../controllers/person.controller');

/**
 * Rutas
 */

router.post('/', RegistrarPerson);
router.get('/', IniciarSesion);


module.exports=router;