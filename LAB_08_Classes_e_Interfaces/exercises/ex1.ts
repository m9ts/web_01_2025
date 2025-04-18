/*
1. Crie uma interface chamada Funcionario que contenha os seguintes campos:
- nome (string)
- idade (number)
- registro (number)
- salário (number)
- dataNascimento (Date)
- ativo (boolean)
Depois, declare uma variável do tipo Funcionario e atribua um valor a ela.
*/

interface Funcionario{
    nome: string;
    idade: number;
    registro: number;
    salario: number;
    dataNascimento: Date;
    ativo: boolean;
}

const printFuncionario: Funcionario ={
    nome: "Mateus",
    idade: 19,
    registro: 99999,
    salario: 3600,
    dataNascimento: new Date(2005, 10, 28),
    ativo: false,
}

console.log(`Funcionário: ${printFuncionario.nome} \nIdade: ${printFuncionario.idade} \nRegistro: ${printFuncionario.registro} \nO salário: ${printFuncionario.salario} \nData de nascimento: ${printFuncionario.dataNascimento} \nAtivo: ${printFuncionario.ativo}`);
/*
function createFuncionario(nome: string, idade: number, registro: number, salario: number, dataNascimento: Date, ativo: boolean): Funcionario{
    return {nome, idade, registro, salario, dataNascimento, ativo}
}

const newFunc = createFuncionario("Gerson", 26, 11230, 3500, new Date(1999, 10, 4), true); // Objeto 
console.log(`Funcionário: ${newFunc.nome} \nIdade: ${newFunc.idade} \nRegistro: ${newFunc.registro} \nSalário: ${newFunc.salario} \nData de nascimento: ${newFunc.dataNascimento} \nAtivo: ${newFunc.ativo}`);
*/