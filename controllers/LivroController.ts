import { Livro, ILivro } from "../models/Livro";
import { Request, Response } from 'express';

export namespace LivroController {

    export async function livrosDisponiveis(req: Request, res: Response): Promise<void> {
        try {
            const listaLivros: ILivro[] = await Livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            console.error(`Falha ao procurar livro: ${error}`);
            res.status(500).json({ message: "Erro ao buscar livros" })
        }
    };

    export async function inserirLivros(req: Request, res: Response): Promise<void> {
        const novoLivro: ILivro = req.body;
        try {
            const livroCriado = await Livro.create(novoLivro);
            res.status(201).json({message: 'criado com sucesso', livro: livroCriado});;
        } catch (error) {
            console.error(`Falha ao cadastrar livro: ${error}`);
            res.status(500).json({ message: "Erro ao buscar livros" });
        }
    };
}

