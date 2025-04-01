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
    function livrosDisponiveis() {
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
    LivroController.livrosDisponiveis = livrosDisponiveis;
    ;
})(LivroController || (exports.LivroController = LivroController = {}));
// class LivroController {
//     async livrosDisponiveis() {
//         try {
//             const listaLivros = await Livro.find({});
//             return listaLivros;
//         } catch (error) {
//             console.error(`Falha ao procurar livro: ${error}`);
//             throw new Error("Erro ao buscar livros");
//         }
//     }
// }
