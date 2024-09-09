/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de carrito
 * 
 */

const {response, request} =require('express');


const GenerarRecibo = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descuento":"no ",
        "idproducto":"001",
    });
} ;
const RealizarPago = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descuento":"no ",
        "idproducto":"001",
    });
} ;



const AplicarDescuento = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descuento":"no ",
        "idproducto":"001",
    });
} ;



module.exports = {
    AplicarDescuento,
    GenerarRecibo,
    RealizarPago,

};