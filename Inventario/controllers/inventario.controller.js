/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de pedido
 * 
 */

const {response, request} =require('express');
const {PrismaClient} = require ('@prisma/client');

const prisma = new PrismaClient();



const ConfirmarDisponibilidad = async (req=request, res=response)=>{
    const inventario=await prisma.inventario.findMany()

    .catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));


    res.json({
        inventario
    });
} ;
const ActualizarCantidad = async (req=request, res=response)=>{
    const {id }=req.params;

    const {name, cantidad }= req.body;

    const result = await prisma.inventario.update({
        where:{
            id:Number(id)
        },
        data:{
            name, 
            cantidad
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
const AgregarCantidad= async (req=request, res=response)=>{
    const {name, cantidad} = req.body;

    const result = await prisma.inventario.create({
        data:{
            name,
            cantidad
        }
    }).catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));
    
    res.json ({
        result
    })
}


module.exports = {
    ConfirmarDisponibilidad,
    ActualizarCantidad,
    AgregarCantidad

};