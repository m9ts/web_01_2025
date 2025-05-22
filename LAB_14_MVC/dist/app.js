"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3020;
app.use(express_1.default.json());
function hello(req, res) {
    res.status(200).send("Hello world");
}
function filtrarProdutoPorID(req, res) {
    try {
        const id = req.params.id;
        res.status(200).json({ ID: id });
    }
    catch (e) {
        res.status(400).json({ message: "Favor informar um ID válido." });
    }
}
function filtrarProdutoPorNome(req, res) {
    try {
        const nome = req.params.nome;
        res.status(200).json({ Nome: nome });
    }
    catch (e) {
        res.status(400).json({ message: "Favor informar um nome válido." });
    }
}
function novoProduto(req, res) {
    try {
        const data = req.body;
        if (!data.id || !data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer ID, nome, preço e fabricante!");
        }
        const produto = { id: data.id, nome: data.nome, preco: data.preco, fabricante: data.fabricante };
        res.status(200).json(produto);
    }
    catch (e) {
        res.status(400).json({ message: "Favor informar um objeto válido" });
    }
}
app.get("/api/hello", hello);
app.get("/api/product/:id", filtrarProdutoPorID);
app.get("/api/product/nome/:nome", filtrarProdutoPorNome);
app.post("/api/product", novoProduto);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
