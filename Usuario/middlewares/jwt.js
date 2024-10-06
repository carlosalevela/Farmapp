const jwt = require ('jsonwebtoken');
const {response, request}=require('express');
const{Decrypt, Encrypt}=require('./valido');


const CreateJWT = (data)=> {
    const {id, email}=data;
    const token = jwt.sign({
        id, 
        email
    }, process.env.AUTH_JWT_SECTRET_KEY
)
return token
};

const validateJWT =(req=request, res=response, next) => {
    let token = Decrypt(req.header('authorization'));

    if(!token){
        return res.status(401).json({
            msn:'Token Invalido'
        });
    }
    try{
        token=token.replace('Bearer ','');
        const {id, email}=jwt.verify(token, process.env.AUTH_JWT_SECTRET_KEY);
        console.log(id, email);
    }catch(error){res.status(401).json({
        msn:'Token Invalido'
    });
} 

    next();

};
module.exports = {
    CreateJWT, 
    validateJWT
}