/*
5. Crie uma interface chamada Endereco com os seguintes campos:
- rua (string)
- numero (number)
- cidade (string)
Em seguida, crie uma classe Cliente com os atributos:
- nome (string)
- cpf (string)
- endereco (do tipo Endereco)
Crie um objeto da classe Cliente.
*/

interface Endereco{
    rua: string;
    numero: number;
    cidade: string;
}

class Cliente{
    nome: string;
    cpf: string;
    endereco: Endereco;

    constructor(nome: string, cpf: string, endereco: Endereco){
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    printCliente(){
        console.log(`Dados do cliente \nCliente: ${this.nome} \nCPF: ${this.cpf}\n \nDados do endereço \nRua: ${this.endereco.rua} \nNúmero: ${this.endereco.numero} \nCidade: ${this.endereco.cidade}`);
    }
}
const enderecoCliente: Endereco = {
    rua: "Avenida dos Eucaliptos",
    numero: 927,
    cidade: "Brasília"
};

const showCliente = new Cliente("Ruben", "467.098.763-XX", enderecoCliente);
showCliente.printCliente();
