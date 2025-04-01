"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LivroController_1 = require("../controllers/LivroController");
const router = (0, express_1.Router)();
// router.get('/livros', async (req: Request, res: Response) => {
//     try {
//         const livros = await LivroController.livrosDisponiveis();
//         res.status(200).json(livros);
//     } catch (error) {
//         res.status(500).json({ message: "Erro ao buscar livros" });
//     }
// });
router.get('/livros', LivroController_1.LivroController.livrosDisponiveis);
router.post('/livros', LivroController_1.LivroController.inserirLivros);
// router.post('/livros', async (req: Request, res: Response) => {
//     try {
//         const livroCadastrado = await LivroController.inserirLivros(req, res);
//         res.status(201).json({message: 'criado com sucesso', livro: livroCadastrado});
//     } catch (error) {
//         res.status(500).json({ message: "Erro ao buscar livros" });
//     }
// })
exports.default = router;
