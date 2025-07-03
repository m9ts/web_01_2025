import { ProductRepository } from "./repository/ProductRepository";

const repository: ProductRepository = new ProductRepository();
repository.createTable();

repository.insertProduct("Camiseta", 20.99);
repository.updateProduct(1, "Camiseta canelada", 40.99);
repository.deleteProduct(1);
