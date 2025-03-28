let nome : string = " Jo ã o ";
let idadee : number = 25;
let ativo : boolean = true ;
let dado : any = 10;
let vazio : null = null ;
let indefinido : undefined = undefined ;

// Tipos literais ( valores espec í ficos )
let situacao : " ativo " | " inativo " = " ativo "; // S ó aceita esses dois valores
11// Uni ã o de tipos ( Union Type )
let idadeOuNulo : number | null = null ;

console . log (` Nome : $ { nome } , Idade : $ { idade } , Ativo : $ { ativo }`) ;

/*
A seguir, a explicação dos principais tipos utilizados:
 string: Representa uma sequência de caracteres (texto).
 number: Representa valores numéricos, incluindo inteiros e decimais.
 boolean: Representa um valor lógico, podendo ser true (verdadeiro) ou false (falso).
 any: Pode armazenar qualquer tipo de valor, oferecendo flexibilidade, mas reduzindo a segurança
do tipo.
 null e undefined: Representam, respectivamente, a ausência intencional de valor e uma variável
não inicializada.
 Tipos literais: Permitem restringir valores aceitos a um conjunto especíco, como no caso da
variável situacao.
 Union Type: Permite que uma variável aceite mais de um tipo, como no caso da variável idadeOuNulo,
que pode ser um número ou null.
O typeof retorna uma string que indica o tipo do operando:
valor = 42;
console . log ( typeof valor ) ; // Output : " number "
*/