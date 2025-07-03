import { executarComandoSQL } from '../database/mysql'; 

export class ProductRepository {
  
  imprimeResult(err: any, result: any) {
    if (result !== undefined) {
      console.log("Dentro callback", result);
    }
    if (err) {
      console.error("Erro na callback:", err);
    }
  }

  createTable() {
    try {
      executarComandoSQL(
        `CREATE TABLE IF NOT EXISTS Product (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price DECIMAL(10,2) NOT NULL
        )`,
        [],
        this.imprimeResult.bind(this)
      );
      console.log('Query executada com sucesso: CREATE TABLE Product');
    } catch (err) {
      console.error('Erro ao executar a query:', err);
    }
  }

  insertProduct(name: string, price: number) {
    try {
      const resultado = executarComandoSQL(
        "INSERT INTO Product (name, price) VALUES (?, ?)",
        [name, price],
        this.imprimeResult.bind(this)
      );
      console.log('Produto inserido com sucesso:', resultado);
    } catch (err) {
      console.error('Erro ao inserir o produto:', err);
    }
  }

  updateProduct(id: number, name: string, price: number) {
    try {
      executarComandoSQL(
        "UPDATE Product SET name = ?, price = ? WHERE id = ?",
        [name, price, id],
        this.imprimeResult.bind(this)
      );
      console.log('Produto atualizado com sucesso.');
    } catch (err) {
      console.error('Erro ao atualizar o produto:', err);
    }
  }

  deleteProduct(id: number) {
    try {
      executarComandoSQL(
        "DELETE FROM Product WHERE id = ?",
        [id],
        this.imprimeResult.bind(this)
      );
      console.log('Produto removido com sucesso.');
    } catch (err) {
      console.error('Erro ao remover o produto:', err);
    }
  }
}
