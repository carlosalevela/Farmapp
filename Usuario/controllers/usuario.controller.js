/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controlador de usuario
 * 
 */

const {response, request} =require('express');
const {PrismaClient} = require ('@prisma/client');

const prisma = new PrismaClient();


const RegistrarUsuario = async (req=request, res=response)=>{
    const {email, password } =req.body;

    const result = await prisma.user.create({
        data: {
            email,
            password
        }
    })    .catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result


    });
} ;

const IniciarSesion = async (req=request, res=response)=>{

    const user = await prisma.user.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));

    
    res.json({
        user


    });
} ;

module.exports = {
    RegistrarUsuario,
    IniciarSesion

};