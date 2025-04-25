/*
Exercício 2: Formatar Dados
Método formatar que:
- Aceite um número e retorne como string com 2 casas decimais
- Aceite uma data e retorne no formato DD/MM/AAAA
- Aceite um booleano e retorne "Sim"ou "Não"
*/

class Dados {
    static formatar(a: number): string;
    static formatar(a: Date): string;
    static formatar (a: boolean): string;
    
    static formatar(a: any): any{
        if (typeof a === 'number'){
            return a.toFixed(2);
        }
        else if (a instanceof Date){
            return a.toLocaleDateString("pt-BR");
        }
        else (typeof a === 'boolean')
            return a ? "Sim" : "Não";
    }
}

console.log("Número decimal com duas casas: ", Dados.formatar(123123.909));
console.log("Data formatada para DD/MM/AAAA: ", Dados.formatar(new Date(2025, 3, 25)));
console.log("Retornando o booleano true: ", Dados.formatar(true));
console.log("Retornando o booleano false: ", Dados.formatar(false));
