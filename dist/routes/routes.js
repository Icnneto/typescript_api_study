"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Livro_1 = require("../models/Livro");
const router = (0, express_1.Router)();
function buscarLivroTeste() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const listaLivros = yield Livro_1.Livro.find({});
            return listaLivros;
        }
        catch (error) {
            console.error(`Falha ao procurar livro: ${error}`);
            throw new Error("Erro ao buscar livros");
        }
    });
}
router.get('/livros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const livros = yield buscarLivroTeste();
        res.json(livros); // Usa `res.json` para retornar JSON válido
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar livros" });
    }
}));
exports.default = router;
