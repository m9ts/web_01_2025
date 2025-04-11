/*
4. Alterando Atributos Diretamente
Crie uma classe Carro com os atributos:
- marca (string)
- modelo (string)
- ano (number)
Crie um objeto da classe, altere diretamente o valor do atributo ano e exiba as informações antes e
depois da alteração utilizando um método mostrarCarro().
*/

class Carro{
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    mostrarCarro(){
        console.log(`A marca do carro é ${this.marca}, o modelo é ${this.modelo} e o ano é ${this.ano}.`);
    }
}

//Antes da atualização
const showCar = new Carro("BMW", "M2 Competition", 2016);
showCar.mostrarCarro();

// Após atualização
showCar.ano = 2024; // Alterando de forma direta o atributo "ano" da classe "Carro"
showCar.mostrarCarro();