async cadastrarProduto(req: Request, res: Response) {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro ao criar o produto.';
      res.status(400).json({ message });
    }
  }
  