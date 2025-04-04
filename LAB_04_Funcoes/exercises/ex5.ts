/*
Exercício 5: Filtro de Aprovados (TypeScript com Types)
Dado um array de alunos e suas respectivas notas, escreva uma função tipada que utilize filter()
para retornar apenas os alunos aprovados.
type Aluno = {
    nome: string;
    nota: number;
};

const alunos: Aluno [] = [
    {nome: "Alice", nota:  8},
    {nome: "Bruno", nota:  5},
    {nome: "Carla", nota:  7},
    {nome: "Daniel", nota:  6},
];
// Implementar uma função que retorna apenas os alunos com nota >=7
*/

type Aluno = {
    nome: string;
    nota: number;
};

const alunos: Aluno [] = [
    {nome: "Alice", nota:  8},
    {nome: "Bruno", nota:  5},
    {nome: "Carla", nota:  7},
    {nome: "Daniel", nota:  6},
];

const notaDesejada = alunos.filter((notaCheck) => notaCheck.nota >= 7);
console.log("Alunos com nota maior ou igual a 7: ", notaDesejada);