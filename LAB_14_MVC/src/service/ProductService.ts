import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
    productRepository: ProductRepository = ProductRepository.getInstance();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price } = produtoData;

        if (!name || !description || !price) {
            throw new Error("Informações incompletas");
        }

        
        const produtoExistente = this.productRepository.filtraTodosProdutos().find(produto => 
            produto.description.toLowerCase() === description.toLowerCase()
        );

        if (produtoExistente) {
            throw new Error("Já existe um produto com essa descrição!");
        }

        const novoProduto = new Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any): Product | undefined {
        const idNumber: number = parseInt(id, 10);
        console.log("ID recebido:", idNumber);
        return this.productRepository.filtraProdutoPorId(idNumber);
    }

    getProducts(order?: string): Product[] {
        const produtos = this.productRepository.filtraTodosProdutos();

        
        if (order === "asc") {
            return produtos.sort((a, b) => a.price - b.price);
        } else if (order === "desc") {
            return produtos.sort((a, b) => b.price - a.price);
        }

        return produtos;
    }
}

