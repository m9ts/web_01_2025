/*
Exercício 1
Criar uma classe chamada DateUtils que contenha métodos estáticos úteis para manipulação de
datas no dia a dia do desenvolvimento.
Requisitos Mínimos
Implemente os seguintes métodos:
formatarData(data: Date, formato: string): string
Retorna a data formatada conforme o padrão especificado. Por exemplo:
 "dd/mm/yyyy" -> 11/04/2025
 "yyyy-mm-dd" -> 2025-04-11
diferencaEmDias(data1: Date, data2: Date): number
Retorna a quantidade de dias entre duas datas.
adicionarDias(data: Date, dias: number): Date
Retorna uma nova data com a quantidade de dias adicionada.
ehFinalDeSemana(data: Date): boolean
Retorna true se a data cair em sábado ou domingo.
converterParaISO(data: Date): string
Retorna a data no formato ISO 8601.

Exemplo de Uso
const hoje = new Date () ;
console . log ( DateUtils . formatarData ( hoje , "dd/mm/ yyyy ") ) ;
console . log ( DateUtils . diferencaEmDias (new Date (" 2025 -04 -01 ") , hoje ) ) ;
console . log ( DateUtils . adicionarDias ( hoje , 10) ) ;
console . log ( DateUtils . ehFinalDeSemana ( hoje ) ) ;
console . log ( DateUtils . converterParaISO ( hoje ) ) ;
*/
