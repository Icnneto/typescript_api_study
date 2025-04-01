import { Router, Request, Response } from 'express';
import { LivroController } from '../controllers/LivroController';
import mongoose from 'mongoose';

const router = Router();

router.get('/livros', LivroController.livrosDisponiveis);
router.get('/livros/:id', LivroController.listarLivroPorId);
router.post('/livros', LivroController.inserirLivros);

export default router;