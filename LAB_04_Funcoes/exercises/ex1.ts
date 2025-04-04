/*
Exercício 1: Função com retorno e transformação de string
Crie uma função maiuscula que recebe uma string e retorna a mesma string em maiúsculas. Faça
a implementação com função tradicional e arrow function
*/

/*ARROW FUNCTION
(parametros): tipoDeRetorno => resultado
*/
function maiuscula(m: string){
    return m.toUpperCase();
}

const maiusculaArrow = (m: string): string => m.toUpperCase();

// Imprimindo usando caps lock
console.log(maiuscula("Typescrit na prática com funções."));
console.log(maiusculaArrow("Abóbora utilizando arrow!"));

