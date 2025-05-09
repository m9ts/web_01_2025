/*
Exemplo 4: Objeto com array

{
    "id": 4,
    " nome ": "Kit Escolar ",
    " itens ": [
        { " nome ": "L á pis", " quantidade ": 2 },
        { " nome ": " Borracha ", " quantidade ": 1 },
        { " nome ": "R é gua", " quantidade ": 1 }
    ]  
}
*/

interface Item{
    nome: string;
    quantidade: number;
}

interface KitEscolar{
    nome: string;
    id: number;
    itens: Item[];
}

const kitEscolar: KitEscolar = {
    id: 4,
    nome: "Kit Escolar",
    itens:[
        {nome: "Lápis", quantidade: 2},
        {nome: "Borracha", quantidade: 1},
        {nome: "Régua", quantidade: 1},
    ]
};

console.log(kitEscolar);

