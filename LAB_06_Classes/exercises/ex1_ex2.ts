/*
1. Criando uma Classe
Crie uma classe chamada Livro com os seguintes atributos:
- titulo (string)
- autor (string)
- anoPublicacao (number)
- editora (string)
Implemente um construtor para inicializar os atributos e um método chamado exibirDados() que
imprime as informações do livro no console.
*/

class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string;

    constructor(titulo: string, autor: string, anoPublicacao: number, editora: string){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
    }

    exibirDados(){
        console.log(`Título: ${this.titulo}
        Autor: ${this.autor}
        Ano de publicação: ${this.anoPublicacao}
        Editora: ${this.editora}
            `)
    }
}

const Livro1 = new Livro("O príncipe", "Nicolau Maquiavel", 1532, "---");
Livro1.exibirDados();  

/*
2. Instanciando Objetos
Usando a classe Livro do exercício anterior, crie dois objetos diferentes e chame o método exibirDados()
para ambos.
*/

const object1 = new Livro("O capital", "Karl Marx", 1919, "---");
object1.exibirDados();

const object2 = new Livro("Eichamnn em Jerusalém", "Hannah Arendt", 1963, "---");
object2.exibirDados();