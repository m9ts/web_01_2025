import { Product } from "../model/Product"

createProduct(data: any): Promise<Product> {
    if (!data.name || !data.price) {
      throw new Error('Favor informar os campos obrigatórios');
    }
    return this.productRepository.insertProduct(data.name, data.price);
  }
  