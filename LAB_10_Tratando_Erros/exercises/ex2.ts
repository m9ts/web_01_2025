/*
Exercício 2 - Identifique o problema no código abaixo. Corrija-o utilizando throw para
validar corretamente os dados:
function cadastrarUsuario ( nome : string , idade : number ) {
    if ( nome . length === 0 || idade < 0) {
        console . log (" Dados inv á lidos ") ;
    }   
    console . log ("Usuário cadastrado !") ;
}
*/

function cadastrarUsuario(nome: string, idade: number){
    if (nome.length === 0 || idade < 0){
        throw new Error("Dados inválidos");
    }
    console.log("Usuário cadastrado!");
}

cadastrarUsuario("Mateus", 19);
cadastrarUsuario("", 0);