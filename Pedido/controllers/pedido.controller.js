/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de pedido
 * 
 */

const {response, request} =require('express');


const AgregarPedido = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idpedido":"001",
        "fecha":"17/09/24",
    });
} ;
const VerPedido = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idpedido":"001",
        "fecha":"17/09/24",
    });
} ;



const EditarFecha = async (req=request, res=response)=>{
    res.json({
        "idpedido":"001",
        "fecha":"17/09/24",
    });
} ;

const ActualizarPedido = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idpedido":"001",
        "fecha":"17/09/24",
    });
} ;

const ConfirmarPedido = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idpedido":"001",
        "fecha":"17/09/24",
    });
} ;

const CancelarPedido = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idpedido":"001",
        "fecha":"17/09/24",
    });
} ;

module.exports = {
    AgregarPedido,
    ActualizarPedido,
    EditarFecha,
    CancelarPedido,
    ConfirmarPedido,
    VerPedido,

};