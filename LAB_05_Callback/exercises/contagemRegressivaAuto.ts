/*
Exercício: Contagem Regressiva Automática
1. Controle de tarefas com atraso
Crie um tipo chamado Tarefa com as seguintes propriedades:
- descricao (string): descrição textual da tarefa
- prioridade (número, onde 1 é a maior prioridade): valor numérico que indica a urgência
- concluida (booleano): indica se a tarefa foi finalizada
Implemente uma função executarTarefas que receba:
- Um array de objetos Tarefa
- Um callback que será chamado a cada tarefa executada, recebendo como parâmetro:
- A descrição da tarefa atual
- O índice da tarefa no array original
- A quantidade total de tarefas
Um tempo de intervalo entre tarefas (número em milissegundos, opcional, com valor padrão de
1000 ms)
A função deve:
- Ordenar as tarefas por prioridade (da maior para a menor)
- Executar uma tarefa por vez usando setInterval, marcando cada tarefa como concluida:
true após processá-la
- Chamar o callback fornecido após cada tarefa ser executada
- Parar a execução com clearInterval após todas as tarefas serem concluídas
- Interromper imediatamente a execução se encontrar uma tarefa com descrição igual a "Cancelar",
sem chamar o callback para esta tarefa

// Exemplo de chamada :
type Tarefa = // implemente
const tarefas : Tarefa [] = [
{ descricao : " Fazer relat ório", prioridade : 2, concluida : false } ,
{ descricao : " Enviar e- mail ", prioridade : 3 , concluida : false } ,
{ descricao : " Reuni ão com equipe ", prioridade : 1 , concluida : false }
];

function imprimirTarefa ( descricao : string , indice : number , totalTarefas :
number ) : void {
console . log ( Tarefa conclu í da : $ { descricao }) ;
console . log ( Progresso : ${ indice + 1}/ $ { totalTarefas }) ;
}
executarTarefas ( tarefas , imprimirTarefa , 1500) ;

Comportamento esperado:
(a) Ordena as tarefas por prioridade (1, 2, 3)
(b) Executa a cada 1.5 segundos
(c) Para cada tarefa concluída, chama o callback mostrando a descrição e progresso
(d) Marca cada tarefa como concluída após processar
*/

type Tarefa ={
    descricao: string;
    prioridade: number;
    concluida: boolean;

};

function executarTarefas(
    tarefas: Tarefa[],
    callback: (descricao: string, indice: number, total: number) => void,
    intervalo: number = 1000
)
{
    tarefas.sort((a,b) => a.prioridade - b.prioridade);

    let indice = 0;
    const total = tarefas.length;

    const executar = setInterval (() => {
        if (indice >= total){
            clearInterval(executar);
            return;
        }
        const tarefa = tarefas [indice];

        if (tarefa.descricao === "Cancelar"){
            clearInterval(executar);
            return;
        }

        tarefa.concluida = true;
        callback(tarefa.descricao, indice, total);
        
        indice++;
    }, intervalo);

}
const tarefas : Tarefa [] = [
    {descricao: "Fazer relatório", prioridade: 2, concluida: false},
    {descricao: "Enviar e- mail ", prioridade: 3 , concluida: false},
    {descricao: "Reunião com equipe ", prioridade: 1 , concluida: false}
];


function imprimirTarefas(descricao: string, indice: number, totalTarefas: number):void{
    console.log(`Tarefa concluída: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
}

executarTarefas(tarefas, imprimirTarefas, 1500);
