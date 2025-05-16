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
    new Jogador(1, "Lamine Yamal", "12345678901", "yamal@barcelona.com", 11999999999, "Ponta-direita"),
    new Jogador(2, "Ribamar", "10987654321", "ribamar@vasco.com", 1188888888, "Centroavante"),
];

function listarJogadores(req: Request, res: Response): void {
    try{
        res.status(200).json({
            status: "success",
            data: jogadores.map(jogador => ({
                id: jogador.id,
                nome: jogador.nome,
                cpf: jogador.cpf,
                email: jogador.email,
                telefone: jogador.telefone,
                posicao: jogador.posicao
            }))
        });
    } catch (e: unknown) {
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Ocorreu um erro no processamento da requisição."
        })
    }
}

function filtrarJogadorID(req: Request, res: Response): void {
    try {
        const id = Number(req.params.id);
        const jogador = jogadores.find(j => j.id === id);

        if (!jogador) {
            res.status(404).json({
                status: "error",
                message: `Jogador com ID ${id} não encontrado.`
            });
            return;
        }

        res.status(200).json({
            status: "success",
            data: {
               id: jogador.id,
               nome: jogador.nome,
               cpf: jogador.cpf,
               email: jogador.email,
               telefone: jogador.telefone,
               posicao: jogador.posicao
            }
        });
    } catch (e: unknown){
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Ocorreu um erro no processamento da requisição. "
        });
    }
}

function novoJogador(req: Request, res: Response): void {
    try {
        const { nome, cpf, email, telefone, posicao } = req.body;

        if (!nome || !cpf || !email || !telefone || !posicao) {
            res.status(400).json({
                status: "error",
                message: "Todos os campos (nome, cpf, email, telefone, posicao) são obrigatórios."
            });
            return;
        }

        const novoId = jogadores.length > 0 ? jogadores[jogadores.length - 1].id + 1 : 1;


        const novoJogador = new Jogador(novoId, nome, cpf, email, telefone, posicao);

        jogadores.push(novoJogador);

        res.status(201).json({
            status: "success",
            message: "Jogador criado com sucesso.",
            data: novoJogador
        });

    } catch (e: unknown) {
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Ocorreu um erro no processamento da requisição."
        });
    }
}


function atualizarJogador(req: Request, res: Response): void {
    try {
        const id = Number(req.params.id);
        const index = jogadores.findIndex(j => j.id === id);

        if (index === -1) {
            res.status(404).json({
                status: "error",
                message: `Jogador com ID ${id} não encontrado.`
            });
            return;
        }

        const { nome, cpf, email, telefone, posicao } = req.body;

        jogadores[index].nome = nome ?? jogadores[index].nome;
        jogadores[index].cpf = cpf ?? jogadores[index].cpf;
        jogadores[index].email = email ?? jogadores[index].email;
        jogadores[index].telefone = telefone ?? jogadores[index].telefone;
        jogadores[index].posicao = posicao ?? jogadores[index].posicao;

        res.status(200).json({
            status: "success",
            message: `Jogador com ID ${id} atualizado com sucesso.`,
            data: jogadores[index]
        });

    } catch (e: unknown) {
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Erro ao atualizar o jogador."
        });
    }
}

function deletarJogador(req: Request, res: Response): void{
    try{
        const id = Number(req.params.id);
        const index = jogadores.findIndex(j => j.id === id);

        if(index === -1){
            res.status(404).json({
                status: "error",
                message: `Jogador com ID ${id} não encontrado.`
            });
            return;
        }
        jogadores.splice(index, 1);

        res.status(200).json({
            status: "success",
            message: `Jogador com ID ${id} removido com sucesso.`
        });
    } catch (e: unknown){
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Erro ao deletar o jogador."
        })
    }
}

app.get("/api/jogadores", listarJogadores);
app.get("/api/jogadores/:id", filtrarJogadorID);
app.post("/api/jogadores", novoJogador);
app.put("/api/jogadores/:id", atualizarJogador);
app.delete("/api/jogadores/:id", deletarJogador);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
