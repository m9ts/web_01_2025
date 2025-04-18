/*
4. Complete o código abaixo preenchendo os campos da interface e retornando um valor:
interface Animal {
    nome : string ;
    tipo : string ;
}
function criarAnimal ( a : Animal ) : string {
// Retorne uma mensagem do tipo :
// "O animal cachorro é do tipo mamí fero "
}
*/

interface Animal{
    nome: string;
    tipo: string;
}

function criarAnimal (a: Animal): string{
    return `Animal: ${a.nome} \nTipo: ${a.tipo}`;
}

const printAnimal: Animal = {nome: "Morcego", tipo: "Mamífero"};
console.log(criarAnimal(printAnimal));
