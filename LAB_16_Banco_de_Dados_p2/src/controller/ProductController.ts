import { Request, Response } from 'express';
import { ProductService } from '../service/ProductService';

export class ProductController {
  private productService = new ProductService();

  async cadastrarProduto(req: Request, res: Response) {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro ao criar o produto.';
      res.status(400).json({ message });
    }
  }

  async atualizarProduto(req: Request, res: Response) {
    try {
      const message = await this.productService.updateProduct(req.body);
      res.status(200).json({ message });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro ao atualizar o produto.';
      res.status(400).json({ message });
    }
  }
}
