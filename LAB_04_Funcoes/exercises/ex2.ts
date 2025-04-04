/*
Exercício 2: Função com números e retorno explícito
Crie uma função multiplicar que recebe dois números e retorna o resultado da multiplicação entre
eles.
*/

function multiplicar (a: number, b: number): number{
    return (a*b);
}
 console.log("Resultado usando função nomeada: " , multiplicar(2, 3));

// Utilizando arrow function
const multiplicarArrow = (a: number, b: number): number => a*b; // Retorno do tipo número
console.log("Resultado sando arrow function: ", multiplicarArrow(6,2));