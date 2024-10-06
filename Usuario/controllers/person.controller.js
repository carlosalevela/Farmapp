/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * controladorores de personas 
 * 
 */

const {response, request} =require('express');
const {PrismaClient} = require ('@prisma/client');

const prisma = new PrismaClient();


const RegistrarPerson = async (req=request, res=response)=>{
    const {name, last_name, published, userID } =req.body;

    const result = await prisma.person.create({
        data: {
            name,
            last_name,
            published,
            userID
            
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

    const person = await prisma.person.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));

    
    res.json({
        person


    });
} ;

module.exports = {
    RegistrarPerson,
    IniciarSesion

};