import { Livro } from "../models/Livro";
import { Request, Response } from 'express';

export namespace LivroController {

    export async function livrosDisponiveis<T>(): Promise<object> {
        try {
            const listaLivros = await Livro.find({});
            return listaLivros;
        } catch (error) {
            console.error(`Falha ao procurar livro: ${error}`);
            throw new Error("Erro ao buscar livros");
        }
    };
}

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
