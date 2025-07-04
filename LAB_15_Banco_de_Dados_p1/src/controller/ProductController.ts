import { ProductService } from "../service/ProductService"
import { Request, Response } from "express";

export class ProductController{
    private productService = new ProductService()

    cadastrarProduto(req: Request, res:Response){
        try{
            this.productService.createProduct(req.body)
            res.status(201).json(
                {
                    message: 'Produto criado com sucesso!!'
                }
            )
        }catch(err){
            const message = err instanceof Error ? err.message : 'Erro ao criar o produto.'
             res.status(400).json(
                {
                    message: message,
                }
            )
        }
    }
}