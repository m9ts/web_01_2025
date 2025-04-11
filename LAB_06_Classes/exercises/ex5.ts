/*
5. Complete o Código
Complete o código abaixo para que ele funcione corretamente. O objetivo é criar uma classe Produto
e um método mostrarInformacoes().
// COMPLETE O CODIGO ABAIXO :
// classe Produto
export class Produto {
nome : string
preco : number
constructor ( __________ ) {
this . nome = nome
this . preco = preco
}
mostrarInformacoes (): void {
// exibe nome e preco
_______________________________
}
}
// uso da classe
const prod = new Produto (" Notebook ", 3500)
prod . ____________________
*/

export class Produto{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
    mostrarInformacoes(): void{
        console.log(`O nome do produto é ${this.nome} e o seu preço em reais é ${this.preco}.`);
    }
}

/*
const prod = new Produto("Notebook", 3500);
prod.mostrarInformacoes();
*/