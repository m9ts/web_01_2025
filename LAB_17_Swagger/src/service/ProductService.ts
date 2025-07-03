import { Product } from "../model/Entity/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
  private productRepository = ProductRepository.getInstance();

  createProduct(data: any): Promise<Product> {
    if (!data.name || !data.price) {
      throw new Error('Favor informar os campos obrigatórios');
    }
    return this.productRepository.insertProduct(data.name, data.price);
  }

  async updateProduct(data: any): Promise<string> {
    if (!data.price) {
      throw new Error('Preço é obrigatório para atualização.');
    }

    if (!data.id && !data.name) {
      throw new Error('Informe o ID ou o nome do produto para atualizar.');
    }

    await this.productRepository.updateProduct({
      id: data.id ?? undefined,
      name: data.name ?? undefined,
      price: data.price,
    });

    return 'Produto atualizado com sucesso!';
  }
}
