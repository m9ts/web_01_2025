/*
Exercício 1: Contagem de Números Pares e Ímpares
Escreva um programa que:
Declare um array numeros com os valores [12, 25, 37, 40, 18, 55, 62, 71, 84, 91]
Utilize um loop for para percorrer o array
Separe os números em dois novos arrays:
- pares para números pares
- impares para números ímpares
Para cada conjunto (pares e impares):
Ordene os valores em ordem crescente apenas utilizando o próprio loop.
Calcule a média dos valores
Determine o maior e o menor número
Some todos os valores
Exiba os dois arrays resultantes e as estatísticas calculadas
*/

let numeros: number [] = [12, 25, 37, 40, 18, 55, 52, 71, 84, 91];
console.log("Lista padrão: ", numeros);

let pares: number [] = [];
let impares: number [] = [];

for (let percorre of numeros){
    if (percorre % 2 == 0){ // Verificando se o número do array é par, ou seja, com resto 0
        pares.push(percorre);
    }
}
pares.sort((a, b)=> a - b); // sort ordena os elementos de um array em ordem alfabética para strings, e em ordem crescente/decrescente para números
console.log("Lista de números pares de forma crescente: ", pares);

for (let percorre of numeros){
    if (percorre % 2 !== 0){ //Verificando se o número do array é ímpar, ou seja, com resto diferente de 0
        impares.push(percorre);
    }
}
impares.sort((a, b) => a - b);
console.log("Lista de números ímpares de forma crescente: ", impares);


if (pares.length > 0){
    let mediaPares = pares.reduce((acumulador, valor) => acumulador + valor, 0)/pares.length; // reduce é utilizado para acumular os valores do array para que a soma total seja obtida, e depois usada para calcular a média ao dividi-la pelo número total de elementos do array (.length)
    console.log("Médias dos números pares: ", mediaPares);
}

if (impares.length > 0){
    let mediaImpares = impares.reduce((acumulador, valor) => acumulador + valor, 0)/impares.length;
    console.log("Médias dos números ímpares: ", mediaImpares);
}

let maiorValor = Math.max(...numeros); // Math.max compara e retorna o maior valor  | O spread (...) permite expandir arrays e passar os valores individuais para Math.max
console.log("O maior valor é: ", maiorValor);


let somaTotal = 0;

for (let num of pares){
    somaTotal += num;
}
for (let num of impares){
    somaTotal += num;
}
console.log("Soma total de ambos os vetores: ", somaTotal);