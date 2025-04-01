import express, { Express, Request, Response } from 'express';
import router from './routes/routes';
import { conectaDatabase } from './config/dbConnect';
import mongoose from 'mongoose';

async function iniciarServidor() {
    try {
        const conexao = await conectaDatabase();

        conexao.on('error', (erro: Error) => {
            console.error(`Erro de conexão: ${erro}`);
        });

        conexao.once('open', () => {
            console.log('Conexão com o banco estabelecida');
        });

        const app: Express = express();
        const PORT: number = 3000;

        app.use(express.json());
        app.use(router);

        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (erro) {
        console.error(`Falha ao iniciar o servidor: ${erro}`);
        process.exit(1);
    }
}

iniciarServidor();