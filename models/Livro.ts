import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILivro extends Document {
    titulo: string;
    autor: string;
    ISBN: string;
    publicacao: number;
}

const livroSchema = new Schema<ILivro>(
    {
        titulo: { type: String, required: true },
        autor: { type: String, required: true },
        ISBN: { type: String, required: true },
        publicacao: { type: Number, required: true }
    }, 
    { versionKey: false }
);

export const Livro: Model<ILivro> = mongoose.model<ILivro>('livros', livroSchema);