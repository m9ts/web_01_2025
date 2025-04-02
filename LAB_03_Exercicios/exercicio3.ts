/*
Exercício 3: Separação de Valores Numéricos e Textuais
Desenvolva um script que:
Crie um array dados do tipo (number | string)[] com [10, "Azul", 25, "Vermelho", 30, "Verde"]
Declare dois arrays vazios: valoresNumericos (tipo number[]) e valoresTextuais (tipo string[])
Use um loop for para percorrer dados e separar os elementos:
- Números vão para valoresNumericos
- Strings vão para valoresTextuais
Verifique o tipo de cada elemento usando typeof
Imprima os dois arrays resultantes
*/

let listaGeral: (number | string) [] = [10, "Azul", 25, "Vermelho", 30, "Verde"];
let valoresNumericos: number [] = [];
let valoresTextuais: string [] = [];

for (let busca of listaGeral){
    if (typeof busca === 'number'){
        valoresNumericos.push(busca);
    }
}
console.log("Lista com valores numéricos: ", valoresNumericos);

for (let busca of listaGeral){
    if (typeof busca === 'string'){
        valoresTextuais.push(busca);
    }
}
console.log("Lista com valores textuais: ", valoresTextuais);