/*
Exercício 3 - Corrija o código para que ele trate corretamente o erro lançado, utilizando unknown e verificação com instanceof:
function executarOperacao () {
try {
    throw " Erro gené rico ";
} catch ( erro ) {
    console . log (" Erro :", erro . message ) ;
    }
}
*/

function executarOperacao(){
    try{
        throw new Error("Erro genérico");
    }
    catch (erro: unknown){
        if (erro instanceof Error){
            console.log("Erro: ", erro.message); 
        }
    }
}

executarOperacao();
