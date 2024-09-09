/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de producto
 * 
 */

const {response, request} =require('express');


const AgregarProducto = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idproducto":"001",
    });
} ;


const VerProductos = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idproducto":"001",
    });
} ;

const VerProducto = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idproducto":"001",
    });
} ;

const EliminarProducto = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idproducto":"001",
    });
} ;

const EditarProducto = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "precio":"17.500",
        "cantidad":"1",
        "descripcion":"Pa la fiebre ",
        "idproducto":"001",
    });
} ;

module.exports = {
    AgregarProducto,
    VerProductos,
    EliminarProducto,
    EditarProducto,
    VerProducto

};