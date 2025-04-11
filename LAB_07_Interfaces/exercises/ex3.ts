/*
Exercício 3
Crie uma interface Veiculo com:
- marca (string)
- modelo (string)
- ligar(): void
Implemente a interface em uma classe chamada Carro.
*/

interface Veiculo{
    marca: string;
    modelo: string;
    ligar(): void;
}

class Carro implements Veiculo{
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar(): void{
        console.log("Vrummm vrummmmmmmm 🚗💨💨");
    }
}

const Koenigsegg = new Carro("Koenigsegg", "Jesko Absolut");
Koenigsegg.ligar();
    