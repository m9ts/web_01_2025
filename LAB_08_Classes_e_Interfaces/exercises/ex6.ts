/*
6. Crie uma classe chamada Numeros que contenha:
- Um atributo chamado valores, que é um vetor de números (number[]);
- Um método adicionar(valor: number) que adiciona um número ao vetor;
- Um método removerUltimo() que remove o último número do vetor;
- Um método media() que retorna a média dos valores do vetor.
Depois, crie um objeto da classe, adicione alguns números, remova um, e exiba a média dos valores
no console.
*/

class Numeros{
    valores: number[];

    constructor(valores: number[] = []){
        this.valores = valores;
    }
    adicionar (valor: number){
        this.valores.push(valor);
        
    }
    removerUltimo(){
        this.valores.pop();
    }

    media(): number | null{
        if (this.valores.length === 0){
            return null;
        }
        let soma = 0;
        for (let num of this.valores){
            soma += num;
        }
        let media = soma/this.valores.length;
        return media;
    }
    /*
    media(): number | null{
        if (this.valores.length === 0) return null; // Verificando se o array está vazio, se estiver, retorna null
        const soma = this.valores.reduce((acumulador, num) => acumulador + num, 0); // Método .reduce para somar os números do array
        // O método .reduce(callback, valorInicial) percorre o array acumulando um valor (acc).
        return soma/this.valores.length;
    }
    */
}
const numeri = new Numeros();


numeri.adicionar(6);
numeri.adicionar(19);
numeri.adicionar(22);

numeri.removerUltimo();

console.log("Números no vetor: ", numeri.valores);
console.log("Média de números: ", numeri.media());

