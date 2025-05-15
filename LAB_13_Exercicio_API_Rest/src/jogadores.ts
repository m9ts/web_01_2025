import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

class Jogador{
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: number;
    posicao: string;

    constructor(id: number, nome: string, cpf: string, email: string, telefone: number, posicao: string){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.posicao = posicao;
    }
}

const jogadores: Jogador[] = [
    new Jogador(1, "Neymar", "12345678901", "neymar@example.com", 11999999999, "Atacante"),
];

app.get("/api/jogadores", (req: Request, res: Response) => {
    res.status(200).json(jogadores);
});


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
