import { executarComandoSQL } from '../database/mysql';
import { Product } from '../model/Entity/Product';

export class ProductRepository {
  private static instance: ProductRepository;

  private constructor() {
    this.createTable();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ProductRepository();
    }
    return this.instance;
  }

  private async createTable() {
    const query = `CREATE TABLE IF NOT EXISTS Vendas.Product (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL
    )`;
    try {
      const resultado = await executarComandoSQL(query, []);
      console.log('Tabela Product criada com sucesso:', resultado);
    } catch (err) {
      console.error('Erro ao criar a tabela Product:', err);
    }
  }

  async insertProduct(name: string, price: number): Promise<Product> {
    const resultado = await executarComandoSQL(
      "INSERT INTO Vendas.Product (name, price) VALUES (?, ?)",
      [name, price]
    );
    console.log('Produto inserido com sucesso:', resultado);
    return new Product(resultado.insertId, name, price);
  }

  async updateProduct(data: { id?: number; name?: string; price: number }): Promise<void> {
    let query = '';
    let valores: any[] = [];

    if (data.id) {
      if (data.name) {
        query = 'UPDATE Vendas.Product SET name = ?, price = ? WHERE id = ?';
        valores = [data.name, data.price, data.id];
      } else {
        query = 'UPDATE Vendas.Product SET price = ? WHERE id = ?';
        valores = [data.price, data.id];
      }
    } else if (data.name) {
      query = 'UPDATE Vendas.Product SET price = ? WHERE name = ?';
      valores = [data.price, data.name];
    } else {
      throw new Error('Informe ao menos o ID ou o nome do produto para atualizar.');
    }

    const resultado = await executarComandoSQL(query, valores);
    console.log('Produto atualizado com sucesso:', resultado);
  }
}
