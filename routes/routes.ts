import { Router, Request, Response } from 'express';
import { Livro } from '../models/Livro';
import mongoose from 'mongoose';

const router = Router();

async function buscarLivroTeste() {
    try {
        const listaLivros = await Livro.find({});
        return listaLivros;
    } catch (error) {
        console.error(`Falha ao procurar livro: ${error}`);
        throw new Error("Erro ao buscar livros");
    }
}


router.get('/livros', async (req: Request, res: Response) => {
    try {
        const livros = await buscarLivroTeste();
        res.json(livros); // Usa `res.json` para retornar JSON válido
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar livros" });
    }
});

export default router;