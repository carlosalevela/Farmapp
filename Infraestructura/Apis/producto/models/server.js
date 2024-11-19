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
const express = require('express');
const cors = require('cors'); // Importa el paquete cors

/**
 * @class Server 
 * clase inicializadora de servicio
 */

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.path = '/api/';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Configuración de CORS para permitir solicitudes desde tu frontend
        this.app.use(cors({
            origin: 'http://localhost:3003', 
            methods: ['GET', 'POST', 'PUT', 'DELETE'], 
            allowedHeaders: ['Content-Type', 'Authorization'], 
        }));
        
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/producto', require('../routes/producto.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`); 
        });
    }
}

module.exports = Server;
