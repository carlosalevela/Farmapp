/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de categoria
 * 
 */

const {response, request} =require('express');
const {PrismaClient} = require ('@prisma/client');

const prisma = new PrismaClient();

const VerCategoria = async (req=request, res=response)=>{

    const categoria = await prisma.categoria.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));


    res.json({
        categoria
    });
} ;


const AgregarCategoria = async (req=request, res=response)=>{

    const {name} = req.body;
    const result = await prisma.categoria.create({
        data: {
            name
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
const ActualizarCategoria = async (req=request, res=response)=>{
    const {id }= req.params;

    const {name} = req.body;

    const result = await prisma.categoria.update({
        where:{
            id:Number(id)
        },
        data: {
            name
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



const EliminarCategoria = async (req=request, res=response)=>{
    const {id }= req.params;


    const result = await prisma.categoria.delete({
        where:{
            id:Number(id)
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




module.exports = {
    ActualizarCategoria,
    EliminarCategoria,
    AgregarCategoria,
    VerCategoria,


};