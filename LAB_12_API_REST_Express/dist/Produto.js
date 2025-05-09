"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    id;
    nome;
    preco;
    fabricante;
    constructor(id, nome, preco, fabrincate) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabrincate;
    }
}
exports.Produto = Produto;
