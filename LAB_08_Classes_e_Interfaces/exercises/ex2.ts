/*2. Crie uma classe chamada Livro com os seguintes atributos públicos:
- titulo (string)
- autor (string)
- ano (number)
Em seguida, crie um objeto dessa classe e imprima suas propriedades no console.
*/

class Livro{
    titulo: string;
    autor: string;
    ano: number

    constructor(titulo: string, autor: string, ano: number){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    printLivro(){
        console.log(`Título do livro: ${this.titulo} \nAutor(a): ${this.autor} \nAno de publicação: ${this.ano}`);
    }
}
const showLivro = new Livro("Crime e castigo", "Fiódor Mikhailovitch Dostoiévski", 1866);
showLivro.printLivro();
