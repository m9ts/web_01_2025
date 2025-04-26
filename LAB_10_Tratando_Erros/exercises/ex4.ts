/*
Exercício 4 - Validação de Classe Pessoa
Dada a classe Pessoa, implemente métodos que validem:
- Se a data de nascimento está no formato DD/MM/yyyy e a pessoa tem menos de 100 anos.
- Se o nome não possui espaços no início ou fim e é convertido para maiúsculas.
- Se o e-mail contém '@' e '.com'.
*/

class Pessoa {
    constructor(
        public nome: string,
        public email: string,
        public dataNascimento: string
    ){}

    validarNome(nome: string): void{
        const padrao = nome.trim().toUpperCase();
        // implementar
    }

    validarEmail(): void{
        // implementar
    }

    validarDataNascimento(): void{
        // implementar
    }
}