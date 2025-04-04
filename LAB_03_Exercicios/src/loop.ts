for ( let i = 0; i < 5; i ++) {
    console . log (` Itera ç ã o : $ { i }`) ;
 }
 
let contador = 0;
while ( contador < 5) {
    console . log (` Itera ç ã o : $ { contador }`) ;
    contador ++;
}
 
let num = 5;
do {
    console . log (`N ú mero : ${ num }`) ;
    num ++;
 } while ( num < 5) ;
   
 /*
 O loop for...of percorre elementos de um array ou outra estrutura iterável.
Exemplo:
const numeros = [10 , 20 , 30 , 40];
for ( const num of numeros ) {
console . log (`N ú mero : ${ num }`) ;
}
O loop for...in percorre as chaves (índices ou propriedades) de um objeto ou array.
Exemplo:
const pessoa = { nome : " Alice " , idade : 25 , cidade : " S ã o Paulo " };
for ( const chave in pessoa ) {
console . log (`$ { chave }: $ { pessoa [ chave ]} `) ;
}
*/