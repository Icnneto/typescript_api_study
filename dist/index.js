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
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const dbConnect_1 = require("./config/dbConnect");
function iniciarServidor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conexao = yield (0, dbConnect_1.conectaDatabase)();
            conexao.on('error', (erro) => {
                console.error(`Erro de conexão: ${erro}`);
            });
            conexao.once('open', () => {
                console.log('Conexão com o banco estabelecida');
            });
            const app = (0, express_1.default)();
            const PORT = 3000;
            app.use(express_1.default.json());
            app.use(routes_1.default);
            app.listen(PORT, () => {
                console.log(`Listening on port ${PORT}`);
            });
        }
        catch (erro) {
            console.error(`Falha ao iniciar o servidor: ${erro}`);
            process.exit(1);
        }
    });
}
iniciarServidor();
