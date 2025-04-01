import dotenv from 'dotenv';
dotenv.config();
import mongoose, { Connection } from 'mongoose';

const connectionString:string = process.env.DB_CONNECTION_STRING!;

if (!connectionString) {
    throw new Error("A variável de ambiente DB_CONNECTION_STRING não foi definida.");
}

export async function conectaDatabase(): Promise<Connection> {
    await mongoose.connect(
        connectionString
    );

    return mongoose.connection;
};