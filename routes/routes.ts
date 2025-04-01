import { Router } from 'express';
import { LivroController } from '../controllers/LivroController';
import mongoose from 'mongoose';

const router = Router();

router.get('/livros', LivroController.livrosDisponiveis);
router.get('/livros/:id', LivroController.listarLivroPorId);
router.post('/livros', LivroController.inserirLivros);
router.put('/livros/:id', LivroController.atualizarLivro);
router.delete('/livros/:id', LivroController.deletarLivros);

export default router;