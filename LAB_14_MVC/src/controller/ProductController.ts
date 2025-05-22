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

export function pesquisarProduto(req: Request, res: Response): void {
    const { id, name } = req.query; 

    let produtoEncontrado;

    if (id) {
        const idNumber: number = parseInt(id as string, 10);
        produtoEncontrado = productService.consultarProduto(idNumber);
    } else if (name) {
        produtoEncontrado = productService.getProducts().find(produto => 
            produto.name.toLowerCase() === (name as string).toLowerCase()
        );
    }

    if (!produtoEncontrado) {
        res.status(404).json({ message: "Produto não encontrado" });
        return;
    }

    res.json(produtoEncontrado);
}


export function listaProdutos(req: Request, res: Response) {
    const { order } = req.query; 
    let produtos = productService.getProducts();

    if (order === "asc") {
        produtos.sort((a, b) => a.price - b.price);
        produtos.sort((a, b) => b.price - a.price);
    }

    res.json(produtos);
}

