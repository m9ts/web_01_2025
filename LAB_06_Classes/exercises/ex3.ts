/*
3. Classe com Método de Boas-vindas
Crie uma classe chamada Usuario com os atributos:
- nome (string)
- email (string)
Implemente um método chamado boasVindas() que imprime a mensagem: "Bem-vindo(a), [nome]!
Seu e-mail é [email]."
Crie um objeto dessa classe e chame o método.
*/

class Usuario{
    nome: string;
    email: string;

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }
    boasVindas(){
        console.log(`Bem vindo(a) ${this.nome}! \nSeu e-mail é ${this.email}.`)
    }
}

const msgWelcome = new Usuario("Fiódor Mikhailovitch Dostoiévski", "dostoievski@vasco.com");
msgWelcome.boasVindas();

