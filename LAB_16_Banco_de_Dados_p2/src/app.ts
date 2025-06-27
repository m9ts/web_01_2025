import { ProductRepository } from "./repository/ProductRepository";

const repository: ProductRepository = new ProductRepository();
repository.createTable();

repository.insertProduct("Camiseta", 20.99);