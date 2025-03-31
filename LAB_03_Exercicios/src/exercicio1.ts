/*
Exercício 1: Classificação de idades

Declare um array idades do tipo number[] com os valores [10, 15, 20, 8, 17, 25]
Utilize um loop for para percorrer o array
Para cada idade, classifique e imprima:
"Criança" se idade < 12
"Adolescente" se 12 ≤ idade < 18
"Adulto" se idade ≥ 18
A saída deve mostrar cada idade com sua classificação correspondente
*/

let idadesC: number [] = [10, 15, 20, 8, 17, 25];

for (let i = 0; i < idadesC.length; i++){
    let idd: number = idadesC[i];
    let idadeString: string = `Idade: ${idd}`
if ( idd < 12) {
    console.log ("Criança -> ", idadeString);
} else if ( idd < 18) {
    console.log ("Adolescente -> ", idadeString);
} else {
    console.log ("Adulto -> ", idadeString);
}
}

