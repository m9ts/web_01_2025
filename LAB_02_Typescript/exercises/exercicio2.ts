/*
Exercício 2: Manipulação de lista de nomes

Implemente um programa que:
Inicialize um array nomes do tipo string[] com ["Carlos", "Ana", "Pedro", "Mariana"]
Encontre e remova o nome "Pedro"usando indexOf e splice
Adicione:
"João"no final do array (usando push)
"Beatriz"no início do array (usando unshift)
Imprima a lista final e o total de nomes
*/

let nomes: string [] = ["Carlos", "Ana", "Pedro", "Mariana"];

console.log("Nomes na lista padrão: ", nomes);

nomes.push("João");
nomes.unshift("Beatriz");

console.log("Nomes na lista após adições: ", nomes);