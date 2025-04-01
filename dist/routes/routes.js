"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LivroController_1 = require("../controllers/LivroController");
const router = (0, express_1.Router)();
router.get('/livros', LivroController_1.LivroController.livrosDisponiveis);
router.get('/livros/:id', LivroController_1.LivroController.listarLivroPorId);
router.post('/livros', LivroController_1.LivroController.inserirLivros);
exports.default = router;
