"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    productRepository = ProductRepository_1.ProductRepository.getInstance();
    createProduct(data) {
        if (!data.name || !data.price) {
            throw new Error('Favor informar os campos obrigatórios');
        }
        return this.productRepository.insertProduct(data.name, data.price);
    }
    async updateProduct(data) {
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
exports.ProductService = ProductService;
