/*
Exercício 4: múltiplos de 3 e 5
Declare um array numeros com os valores [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120,
33, 47, 52]
Utilize um loop for para percorrer o array e:
Separe os números em três novos arrays:
* multiplosDe3: números múltiplos de 3
* multiplosDe5: números múltiplos de 5
* outros: números que não se encaixam nas categorias anteriores
Para cada um dos três arrays (multiplosDe3, multiplosDe5, outros):
Ordene os valores em ordem decrescente usando apenas loops e comparações (sem métodos
como sort)
Calcule:
* Média aritmética
* Mediana
Determine:
* Maior valor
* Menor valor
* Soma de todos os valores
Exiba os três arrays resultantes e todas as estatísticas calculadas
*/

let numeri = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52];

// Separando os números em três arrays: múltiplos de 3, múltiplos de 5 e outros
let multiplosDe3: number[] = [];
let multiplosDe5: number[] = [];
let outros: number[] = [];

for (let num of numeri) {
    if (num % 3 === 0) {
        multiplosDe3.push(num);
    } else if (num % 5 === 0) {
        multiplosDe5.push(num);
    } else {
        outros.push(num);
    }
}

// Função para ordenar o array em ordem decrescente
function ordenarDecrescente(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

// Função para calcular a soma de todos os valores
function calcularSoma(array: number[]): number {
    let soma = 0;
    for (let num of array) {
        soma += num;
    }
    return soma;
}

// Função para calcular a média aritmética
function calcularMedia(array: number[]): number {
    let soma = calcularSoma(array);
    return soma / array.length;
}

// Função para calcular a mediana
function calcularMediana(array: number[]): number {
    let meio = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[meio - 1] + array[meio]) / 2; // Média dos dois valores centrais
    } else {
        return array[meio]; // Valor central
    }
}

// Função para determinar o maior valor
function maior(array: number[]): number {
    let maior = array[0];
    for (let num of array) {
        if (num > maior) {
            maior = num;
        }
    }
    return maior;
}

// Função para calcular o menor valor
function menorValor(array: number[]): number {
    let menor = array[0];
    for (let num of array) {
        if (num < menor) {
            menor = num;
        }
    }
    return menor;
}

// Ordenando os arrays em ordem decrescente
ordenarDecrescente(multiplosDe3);
ordenarDecrescente(multiplosDe5);
ordenarDecrescente(outros);

// Exibindo os resultados para cada array
function estatisticas(nome: string, array: number[]): void {
    console.log(`${nome}:`, array);
    console.log(`  Soma dos Valores: ${calcularSoma(array)}`);
    console.log(`  Média Aritmética: ${calcularMedia(array)}`);
    console.log(`  Mediana: ${calcularMediana(array)}`);
    console.log(`  Maior Valor: ${maior(array)}`);
    console.log(`  Menor Valor: ${menorValor(array)}`);
}

estatisticas("Múltiplos de 3", multiplosDe3);
estatisticas("Múltiplos de 5", multiplosDe5);
estatisticas("Outros", outros);

/*
${}
Interpolação de valores é a técnica que permite inserir valores
(como variáveis, expressões, funções ou qualquer elemento dinâmico) dentro de uma string,
substituindo placeholders no momento da execução.
*/