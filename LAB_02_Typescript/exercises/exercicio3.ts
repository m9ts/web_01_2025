/*
Exercício 3: Lista mista com filtragem

Desenvolva um script que:
Crie um array listaMista do tipo (number | string)[] com [1, "Maçã", 2, "Banana", 3, "Laranja"]
Declare dois arrays vazios: numeros (tipo number[]) e frutas (tipo string[])
Use um loop for para:
Separar números para o array numeros
Separar strings para o array frutas
Verifique o tipo de cada elemento com typeof
Imprima ambas as listas resultantes
*/

let listaMista: (number | string) [] = [1, "Maçã", 2, "Banana", 3, "Laranja"];
let numeros: number [] = [];
let frutas: string [] = [];

for (let element of listaMista){
    if (typeof element === 'number'){
        numeros.push(element);
    }
}

for (let element of listaMista){
    if (typeof element === 'string'){
        frutas.push(element);
    }
}

console.log("Vetor misto: ", listaMista);
console.log("Vetor de frutas: ", frutas);
console.log("Vetor de números: ", numeros);