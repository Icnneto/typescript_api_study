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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroController = void 0;
const Livro_1 = require("../models/Livro");
const mongoose_1 = __importDefault(require("mongoose"));
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
                res.status(500).json({ message: "Erro ao cadastrar livro" });
            }
        });
    }
    LivroController.inserirLivros = inserirLivros;
    ;
    function listarLivroPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                    res.status(400).json({ message: 'ID inválido' });
                }
                const livroEncontrado = yield Livro_1.Livro.findById(id);
                if (!livroEncontrado) {
                    res.status(404).json({ message: 'Livro não encontrado' });
                }
                res.status(200).json({ message: 'livro encontrado com sucesso', livro: livroEncontrado });
            }
            catch (error) {
                console.error(`Falha ao buscar livro: ${error}`);
                res.status(500).json({ message: 'falha ao buscar livro' });
            }
        });
    }
    LivroController.listarLivroPorId = listarLivroPorId;
    ;
    function atualizarLivro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                    res.status(400).json({ message: 'ID inválido' });
                }
                ;
                const camposAtualizar = req.body;
                yield Livro_1.Livro.findByIdAndUpdate(id, camposAtualizar);
                res.status(200).json({ message: 'livro atualizado com sucesso' });
            }
            catch (error) {
                console.error(`Falha ao atualizar livro: ${error}`);
                res.status(500).json({ message: 'falha ao atualizar livro' });
            }
        });
    }
    LivroController.atualizarLivro = atualizarLivro;
    ;
    function deletarLivros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const livroParaDeletar = req.params.id;
                if (!mongoose_1.default.Types.ObjectId.isValid(livroParaDeletar)) {
                    res.status(400).json({ message: 'ID inválido' });
                }
                ;
                yield Livro_1.Livro.findByIdAndDelete(livroParaDeletar);
                res.status(200).json({ message: 'livro deletado com sucesso' });
            }
            catch (error) {
                console.error(`Falha ao deletar livro: ${error}`);
                res.status(500).json({ message: 'falha ao deletar livro' });
            }
        });
    }
    LivroController.deletarLivros = deletarLivros;
    ;
})(LivroController || (exports.LivroController = LivroController = {}));
