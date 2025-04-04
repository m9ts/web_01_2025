/*
Exercício 4: Filtro por Cargo (TypeScript com Types)
Dado um array de funcionários, escreva uma função que utilize filter() para retornar apenas
aqueles que possuem um cargo específico, usando tipos TypeScript.

type Funcionario = {
    nome : string ;
    cargo : string ;
};
const funcionarios : Funcionario [] = [
    { nome : " Marcos ", cargo : " Desenvolvedor " } ,
    { nome : " Fernanda ", cargo : " Gerente " } ,
    { nome : " Carlos ", cargo : " Desenvolvedor " } ,
    { nome : " Joana ", cargo : " Analista " }
];
const cargoDesejado : string = " Desenvolvedor ";
// Implementar uma função que retorna apenas os funcionários com o cargo
especificado
*/

type Funcionario = {
    nome: string;
    cargo: string;
};

const funcionarios : Funcionario [] = [
    {nome: "Marcos", cargo: "Desenvolvedor"},
    {nome: "Fernanda", cargo: "Gerente"},
    {nome: "Carlos", cargo: "Desenvolvedor"},
    {nome: "Joana", cargo: "Analista"}
];

const cargoDesejado = funcionarios.filter((funcionario) => funcionario.cargo === "Desenvolvedor"); // funcionarios.filter -> funcionarios: nome da constante funcionarios do tipo Funcionario
/*
funcionario.cargo acessa a propriedade cargo de cada objeto individual dentro do array funcionarios durante
 a execução do método .filter(). A comparação funcionario.cargo === "Desenvolvedor" verifica se o valor dessa propriedade é igual ao cargo especificado ("Desenvolvedor")
*/
console.log("Aqui estão os funcionários com o cargo desejado: ", cargoDesejado);