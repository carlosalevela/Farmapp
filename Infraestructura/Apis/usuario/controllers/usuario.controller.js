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
const {Encrypt, Decrypt}= require('../middlewares/valido');
const{CreateJWT}= require('../middlewares/jwt');
const prisma = new PrismaClient();


const RegistrarUsuario = async (req=request, res=response)=>{
    let {email, password } =req.body;

    password = Encrypt(password);

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

const Login = async(req=request, res=response)=> {
    let {email, password } =req.body;

    
    

    const user = await prisma.user.findFirst({
        where: {
            email

        }

    }).catch(err=>{
        return err.message;
    }).finally((async()=>{
        await prisma.$disconnect();
    }));

    if(user){
        if(Decrypt(user.password)==password){
            userJWT = Encrypt(CreateJWT(user));

            res.json({
                user,
                userJWT
            })
        }else{
            res.json({"msn": "Contraseña Incorrecta"})
        }    
    }else{
        res.json({"msn": "Usuario No Encontrado"})

    }



};
module.exports = {
    RegistrarUsuario,
    IniciarSesion,
    Login
};