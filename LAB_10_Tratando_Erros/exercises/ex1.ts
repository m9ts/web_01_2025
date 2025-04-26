/*
Exercício 1 - Analise o código abaixo e identifique o erro. Em seguida, reescreva-o
com o tratamento adequado.
function calcularMedia ( notas : number []) : number {
   let soma = 0;
   for ( let i = 0; i <= notas . length ; i ++) {
   soma += notas [ i ];
}
   return soma / notas . length ;
}
Dica: O erro pode lançar NaN sem aviso. Utilize try/catch e ajuste a lógica do loop.
*/

function calcularMedia(notas: number[]): number{
   try{
      let soma = 0;
      for (let i = 0; i < notas.length; i++){
         soma += notas [i];
      }
      return soma / notas.length;
   }
   catch(erro){
      console.log("Erro encontrado: ", (erro as Error).message);
      return 0;
   }
}
