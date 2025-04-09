/*
Exercício 3: Manipulação de arrays
Crie uma função chamada dobrarNumeros que recebe um array de números e retorna um novo array
com todos os valores multiplicados por 2.
*/

function dobrarNumeros(num: number[]): number[]{ // Criando array que recebe um array do tipo número
    let arrayNumeros: number[] = []; // Criando novo array que exibirá os números dobrados do array num
    for (let i = 0; i < num.length; i++){// Loop será executado enquanto o valor de i for menor que o comprimento do array num
        arrayNumeros[i] = num[i]*2; // arrayNumeros conterá o dobro de cada elemento do array num
    }
    return arrayNumeros;
}
const resultado = dobrarNumeros([7, 2, 3, 16, 5]);
console.log("Array com o resultado dos números dobrados: ", resultado);