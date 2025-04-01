import { Livro, ILivro } from "../models/Livro";
import { Request, Response } from 'express';
import mongoose from "mongoose";

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
            res.status(500).json({ message: "Erro ao cadastrar livro" });
        }
    };

    export async function listarLivroPorId (req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({ message: 'ID inválido' });
            }

            const livroEncontrado: ILivro | null = await Livro.findById(id);

            if (!livroEncontrado) {
                res.status(404).json({ message: 'Livro não encontrado' });
            }

            res.status(200).json({ message: 'livro encontrado com sucesso', livro: livroEncontrado })
        } catch (error) {
            console.error(`Falha ao buscar livro: ${error}`);
            res.status(500).json({ message: 'falha ao buscar livro' })
        }
    };

    export async function atualizarLivro (req: Request, res: Response): Promise<void> {
        try {
            const id: string = req.params.id;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400).json({ message: 'ID inválido' });
            };
            
            const camposAtualizar: ILivro = req.body;

            await Livro.findByIdAndUpdate(id, camposAtualizar);
            res.status(200).json({ message: 'livro atualizado com sucesso'})
        } catch (error) {
            console.error(`Falha ao atualizar livro: ${error}`);
            res.status(500).json({ message: 'falha ao atualizar livro' })
        }
    };
}

