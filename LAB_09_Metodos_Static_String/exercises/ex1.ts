/*
1. Sobrecarga de métodos
Crie um método chamado compararStrings que recebe duas strings e compara se são iguais, considerando que podem estar em diferentes formatos de caso (maiúsculas, minúsculas, camelCase, etc.).
Requisitos
- O método deve retornar true se as strings forem iguais independentemente do caso
- Deve ignorar espaços no início e fim das strings
*/

class Compare{
   static compararStrings(string1: string, string2: string): boolean{
        const padronizada1 = string1.trim().toLowerCase(); // Métodos ->trim(): remoção de espaços (inicial e final) | toLowerCase(): padronização de caracteres para letras minúsculas
        const padronizada2 = string2.trim().toLowerCase();
        return padronizada1 === padronizada2; // Comparando se as strings são iguais
   }
}

console.log(Compare.compararStrings(" Vasco", "vAscO"));
console.log(Compare.compararStrings("goiabada", "Linguiça toscana"));
console.log(Compare.compararStrings("troll", "TROLL"));