import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server{
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        //DataBase
        this.dbConnection();
        //Middlewares
        this.middlewares();
        //Definir mis rutas
        this.routes();
    }

    //TODO conectar base de datos
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('DataBase Online');
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json());
        //Carpeta publica
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen(this.port, () => console.log('Servidor corriendo en puerto' + this.port));
    }
}

export default Server;