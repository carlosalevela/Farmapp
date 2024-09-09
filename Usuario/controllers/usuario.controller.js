/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de usuario
 * 
 */

const {response, request} =require('express');


const RegistrarUsuario = async (req=request, res=response)=>{
    res.json({
        "nombre": "admin",
        "contraseña":"admin",


    });
} ;

const IniciarSesion = async (req=request, res=response)=>{
    res.json({
        "nombre": "admin",
        "contraseña":"admin",


    });
} ;

module.exports = {
    RegistrarUsuario,
    IniciarSesion

};