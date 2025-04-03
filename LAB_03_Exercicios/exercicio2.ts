/*
Exercício 2: Manipulação de Lista de Produtos
Implemente um programa que:
Inicialize um array produtos do tipo string[] com ["Arroz", "Feijão", "Leite", "Pão"]
Substitua o item "Leite"por "Queijo"usando indexOf e atribuição direta
Remova o primeiro item da lista usando shift
Adicione "Café"no final do array com push
Imprima a lista final e o número total de itens
*/


let produtos: string [] = ["Arroz", "Feijão", "Leite", "Pão"];
let subst =  produtos.indexOf("Leite"); // indexOf localiza o índice de um elemento dentro do array que, nesse caso, é 2
//produtos[subst] = "Queijo"; // Substituição do elemento do índice 2("Leite") por "Queijo"
produtos.splice(2, 1, "Queijo"); // 2 = índice | 1 = um item a ser removido | "Queijo" = item a ser adicionado

produtos.shift();
produtos.push("Café");
console.log("Os produtos da lista são: ", produtos);

