/*
Exercício 3 - Criação de Classes TypeScript a partir de JSON
A seguir, temos quatro exemplos de objetos JSON. Sua tarefa é criar as classes correspondentes em
TypeScript que representem essas estruturas.
*/
/*
Exemplo 1: Estrutura Simples
{
    "id": 1,
    " nome ": " Caderno ",
    " preco ": 12.90
}

Tarefa: Crie uma classe `Produto` em TypeScript para representar este JSON.
*/

class Produto{
    id: number;
    nome: string;
    preco: number;
    
    constructor (id: number, nome: string, preco: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    print(): void{
        console.log(`Nome do produto: ${this.nome} \nID: ${this.id} \nPreço: R$${this.preco}`);
    }
}
const produto1 = new Produto(1, "Caderno", 12.90);
produto1.print();

    
