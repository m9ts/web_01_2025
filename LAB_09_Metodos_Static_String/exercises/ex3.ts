/*
Exercício 3: Manipulação Avançada de Strings
- Método para contar ocorrências de uma substring
- Método para mostrar a primeira letra de cada palavra de uma oração.
- Método para remover todas as vogais
*/

class Manipulacao {
    static contarOcorrencias(texto: string, busca: string){
        return texto.split(busca).length -1;
    }
    static primeirasLetras(texto: string){
        return texto.split(' ').map(palavra => palavra.charAt(0)).join('');

    }
    static removerVogais(texto: string): string{
        return texto.replace(/[aeiouAEIOU]/g, '');
    }
}

console.log("Método para contar ocorrências de uma substring: ", Manipulacao.contarOcorrencias("goiabada", "bada"));
console.log("Método para mostrar a primeira letra de cada palavra de uma oração: ", Manipulacao.primeirasLetras("Megan Fox"));
console.log("Método para remover todas as vogais: ", Manipulacao.removerVogais("Moqueca"));