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
exports.LivroController = void 0;
const Livro_1 = require("../models/Livro");
var LivroController;
(function (LivroController) {
    function livrosDisponiveis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaLivros = yield Livro_1.Livro.find({});
                res.status(200).json(listaLivros);
            }
            catch (error) {
                console.error(`Falha ao procurar livro: ${error}`);
                res.status(500).json({ message: "Erro ao buscar livros" });
            }
        });
    }
    LivroController.livrosDisponiveis = livrosDisponiveis;
    ;
    function inserirLivros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoLivro = req.body;
            try {
                const livroCriado = yield Livro_1.Livro.create(novoLivro);
                res.status(201).json({ message: 'criado com sucesso', livro: livroCriado });
                ;
            }
            catch (error) {
                console.error(`Falha ao cadastrar livro: ${error}`);
                res.status(500).json({ message: "Erro ao buscar livros" });
            }
        });
    }
    LivroController.inserirLivros = inserirLivros;
    ;
})(LivroController || (exports.LivroController = LivroController = {}));
