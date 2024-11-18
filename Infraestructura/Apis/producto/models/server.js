/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * 
 * servidor de express
 * 
 */

/**
 * Importando Variables
 * 
 */

const express = require ('express');


/**
 * @class Server 
 * clase inicializadora de servicio
 */

class Server {
    constructor(){
        this.app=express();
        this.port=3000;
        this.path='/api/';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/producto', require('../routes/producto.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }
}

module.exports=Server;