/*
3. Converta a interface abaixo para uma classe com os mesmos campos:
interface Produto {
    id : number ;
    nome : string ;
    preco : number ;
}
*/

class Produto{
    id: number;
    nome: string;
    preco: number

    constructor(id: number, nome: string, preco: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    printProduto(){
        console.log(`Produto: ${this.nome} \nID: ${this.id} \nPreço: R$ ${this.preco}`);
    }
}
const showProduto = new Produto(2998, "Pão de alho", 22.50);
showProduto.printProduto();