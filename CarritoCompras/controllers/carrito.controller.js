/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de carrito
 * 
 */

const {response, request} =require('express');

const {PrismaClient} = require ('@prisma/client');

const prisma = new PrismaClient();


const GenerarRecibo = async (req=request, res=response)=>{

    const {name, total, descuento} = req.body;

    const result = await prisma.carrito.create({
        data:{
            name, 
            total, 
            descuento
        }
    }).catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));


    res.json({
        result
    });
} ;
const RealizarPago = async (req=request, res=response)=>{
    const carrito = await prisma.carrito.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));

    res.json({
        carrito
    });
} ;



const AplicarDescuento = async (req=request, res=response)=>{
    const carrito = await prisma.carrito.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));

    res.json({
        carrito
    });
} ;



module.exports = {
    AplicarDescuento,
    GenerarRecibo,
    RealizarPago,

};