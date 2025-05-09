/*
Exemplo 2: Objeto com dois níveis de aninhamento
{
    "id": 3,
    " nome ": " Smartphone ",
    " preco ": 1800.00 ,
    " fabricante ": {
        " nome ": " Samsung ",
        " endereco ": {
            " cidade ": "São Paulo ",
            " pais ": " Brasil "
        }
    }
}
Tarefa: Crie classes `Produto`, `Fabricante` e `Endereco`
*/

class Fabricante{
    nome: string;

    constructor (nome: string){
        this.nome = nome;
    }
}

class Endereco{
    cidade: string;
    country: string;

    constructor (cidade: string, country: string){
        this.cidade = cidade;
        this.country = country;
    }
}

class Prodc{
    id: number;
    nome: string;
    preco: number;
    fabricante: Fabricante;
    endereco: Endereco;

    constructor (id: number, nome: string, preco: number, fabricante: Fabricante, endereco: Endereco){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
        this.endereco = endereco;
    }
}

const Fab = new Fabricante("Apple");
const End = new Endereco("Shangai", "China");
const P = new Prodc(99, "Iphone 16 Pro Max", 9000.00, Fab, End);

console.log(P);

    