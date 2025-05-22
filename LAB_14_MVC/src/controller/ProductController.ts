import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";

const productService = new ProductService();

export function cadastrarProduto(req: Request, res: Response) {
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            produto: novoProduto
        });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export function pesquisarProdutoPorID(req: Request, res: Response): void {
    const id = req.params.id;
    const produto = productService.consultarProduto(id);

    if (!produto) {
        res.status(404).json({ message: "Produto não encontrado" });
        return;
    }

    res.json(produto);
}

export function listaProdutos(req: Request, res: Response) {
    const produtos = productService.getProducts();
    res.json(produtos);
}
