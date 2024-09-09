/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de pedido
 * 
 */

const {response, request} =require('express');


const ConfirmarDisponibilidad = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "cantidad":"1",
        "idinventario":"2",
        "idcategoria":"1",
    });
} ;
const ActualizarCantidad = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "cantidad":"1",
        "idinventario":"2",
        "idcategoria":"1",
    });
} ;


module.exports = {
    ConfirmarDisponibilidad,
    ActualizarCantidad,

};