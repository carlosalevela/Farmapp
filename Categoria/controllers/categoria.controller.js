/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de categoria
 * 
 */

const {response, request} =require('express');

const VerCategoria = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "idcategoria":"2",
    });
} ;


const AgregarCategoria = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "idcategoria":"2",
    });
} ;
const ActualizarCategoria = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "idcategoria":"2",
    });
} ;



const EliminarCategoria = async (req=request, res=response)=>{
    res.json({
        "nombre": "Dolex",
        "idcategoria":"2",
    });
} ;




module.exports = {
    ActualizarCategoria,
    EliminarCategoria,
    AgregarCategoria,
    VerCategoria,


};