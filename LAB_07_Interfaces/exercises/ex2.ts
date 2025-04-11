/*
Exercício 2
Crie uma interface chamada Livro com as seguintes propriedades:
- título (string)
- autor (string)
- anoPublicacao (number)
Crie dois objetos do tipo Livro.
*/

interface Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
}


const livro1: Livro = {
   titulo: "Modernidade Líquida",
   autor: "Zygmunt Bauman",
   anoPublicacao: 1999
};

const livro2: Livro = {
    titulo: "Romeu e Juleita",
    autor: "William Shakespeare",
    anoPublicacao: 1597
};

console.log(`O título do primeiro livro é ${livro1.titulo}, o autor é ${livro1.autor} e o ano de publicação é ${livro1.anoPublicacao}.\n`);
console.log(`O título do segundo livro é ${livro2.titulo}, o autor é ${livro2.autor} e o ano de publicação é ${livro2.anoPublicacao}.`);