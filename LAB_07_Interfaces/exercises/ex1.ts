/*
Exercício 1
Criar uma classe chamada DateUtils que contenha métodos estáticos úteis para manipulação de
datas no dia a dia do desenvolvimento.
Requisitos Mínimos
Implemente os seguintes métodos:
formatarData(data: Date, formato: string): string
Retorna a data formatada conforme o padrão especificado. Por exemplo:
- "dd/mm/yyyy" -> 11/04/2025
- "yyyy-mm-dd" -> 2025-04-11
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

class DateUtils {

    formatarData(data: Date, formato: string): string {
        let dataFormatada: string = '';
        let separador = '/';

        let separadores: string[] = formato.split('/');
        if (separadores.length === 1) {
            separadores = formato.split('-');
            separador = '-';
        }

        let cont = 0;
        for (let sep of separadores) {
            cont++;
            if (sep === 'DD') {
                if (data.getDate() < 10) {
                    dataFormatada += '0';
                }
                dataFormatada += data.getDate();
            }
            else if (sep === 'MM') {
                if (data.getMonth() + 1 < 10) {
                    dataFormatada += '0';
                }
                dataFormatada += (data.getMonth() + 1);
            }
            else if (sep === 'YYYY') {
                dataFormatada += data.getFullYear();
            }

            if (cont < 3) {
                dataFormatada += separador;
            }
        }
        return dataFormatada;
    }

    diferencaEmDias(dataInicial: Date, dataFinal: Date): number {
        const diffEmMs = dataFinal.getTime() - dataInicial.getTime();
        return diffEmMs / (1000 * 60 * 60 * 24);
    }

    adicionarDias(data: Date, dias: number): Date {
        return new Date(data.getTime() + dias * 86400000);
    }

    ehFinalDeSemana(data: Date): boolean {
        return data.getDay() === 0 || data.getDay() === 6;
    }

    converterParaISO(data: Date): string {
        return data.toISOString();
    }
}

const dateUtils = new DateUtils()

console.log( dateUtils.formatarData(new Date(), 'YYYY-MM-DD'))
console.log(dateUtils.diferencaEmDias(new Date("2025-04-01"), new Date()))
console.log(dateUtils.adicionarDias(new Date(), 10))
console.log(dateUtils.ehFinalDeSemana(dateUtils.adicionarDias(new Date(), 2)))
console.log(dateUtils.converterParaISO(new Date()))