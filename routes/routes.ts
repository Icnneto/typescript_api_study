import { Router, Request, Response } from 'express';
import { LivroController } from '../controllers/LivroController';
import mongoose from 'mongoose';

const router = Router();

router.get('/livros', async (req: Request, res: Response) => {
    try {
        const livros = await LivroController.livrosDisponiveis();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar livros" });
    }
});

export default router;