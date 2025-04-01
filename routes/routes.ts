import { Router, Request, Response } from 'express';
import { LivroController } from '../controllers/LivroController';
import mongoose from 'mongoose';

const router = Router();

// router.get('/livros', async (req: Request, res: Response) => {
//     try {
//         const livros = await LivroController.livrosDisponiveis();
//         res.status(200).json(livros);
//     } catch (error) {
//         res.status(500).json({ message: "Erro ao buscar livros" });
//     }
// });

router.get('/livros', LivroController.livrosDisponiveis);
router.post('/livros', LivroController.inserirLivros);

// router.post('/livros', async (req: Request, res: Response) => {
//     try {
//         const livroCadastrado = await LivroController.inserirLivros(req, res);
//         res.status(201).json({message: 'criado com sucesso', livro: livroCadastrado});
//     } catch (error) {
//         res.status(500).json({ message: "Erro ao buscar livros" });
//     }
// })

export default router;