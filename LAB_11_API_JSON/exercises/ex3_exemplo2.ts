/*
Exemplo 2: Objeto com aninhamento
{
    "id": 2,
    " nome ": " Notebook ",
    " preco ": 2500.00 ,
    " categoria ": {
        "id": 1,
        " nome ": " Informática "
    }
}
Tarefa: Crie classes `Produto` e `Categoria`
*/

class Categoria{
    id: number;
    nome: string;

    constructor (id: number, nome: string){
        this.id = id;
        this.nome = nome;
    }
}

class Product{
    id: number;
    nome: string;
    preco: number;
    categoria: Categoria;

    constructor (id: number, nome: string, preco: number, categoria: Categoria){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}

const Categ = new Categoria(1, "Informática");
const Prod = new Product(2, "Notebook", 3500.00, Categ);

console.log(Prod);

    