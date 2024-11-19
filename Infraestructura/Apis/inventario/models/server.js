/**
 * @author Lina Viveros - Carlos Alegria
 * @version 0.0.1
 * 
 * Servidor de Express
 */

/**
 * Importando Variables
 */
const express = require('express');
const cors = require('cors'); // Importa el paquete cors

/**
 * @class Server 
 * Clase inicializadora de servicio
 */
class Server {
    constructor() {
        this.app = express();
        this.port = 3000;  // Asegúrate de que este puerto sea el correcto para tu backend
        this.path = '/api/'; // Define el path base para las rutas

        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Configuración de CORS para permitir solicitudes desde tu frontend
        this.app.use(cors({
            origin: 'http://localhost:3003',  // Permite solicitudes desde tu frontend
            methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
            allowedHeaders: ['Content-Type', 'Authorization'],  // Cabeceras permitidas
        }));

        // Middleware para manejar el cuerpo de las solicitudes en formato JSON
        this.app.use(express.json());
    }

    routes() {
        // Define las rutas de tu API
        this.app.use('/inventario', require('../routes/inventario.routes'));  // Asegúrate de que esta ruta esté bien configurada
        this.app.use('/producto', require('../routes/producto.routes'));  // Añade tus otras rutas aquí
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto: ${this.port}`);
        });
    }
}

module.exports = Server;
