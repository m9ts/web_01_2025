/*
Exercício 6: Filtro por Mês de Evento (TypeScript com Types)
Dado um array de eventos tipados, filtre apenas aqueles que ocorrem em um determinado mês.
type Evento = {
    nome : string ;
    mes : string ;
};
const eventos : Evento [] = [
{ nome : " Workshop TypeScript ", mes : " Janeiro " } ,
{ nome : " Hackathon ", mes : " Março" } ,
{ nome : " Confer ê ncia de IA", mes : " Janeiro " }
];

const mesDesejado : string = " Janeiro ";
// Implementar uma função que retorna apenas os eventos no mês desejado
*/

type Evento = {
    nome: string;
    mes: string;
};

const eventos: Evento [] = [
    {nome: "Workshop Typescript", mes: "Janeiro"},
    {nome: "Hackathon", mes: "Março"},
    {nome: "Conferência de IA", mes: "Janeiro"},
];

const mesDesejado = eventos.filter((eventoCheck) => eventoCheck.mes === "Janeiro");
console.log("Eventos no mês de janeiro: ", mesDesejado);

