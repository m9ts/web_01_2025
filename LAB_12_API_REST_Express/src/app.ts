import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

function hello(req: Request, res: Response): void {
    res.status(200).send("Hello world");
}

function filtrarProdutoPorID(req: Request, res: Response): void {
    try {
        const id = req.params.id;

        res.status(200).json({
            status: "success", // Resposta de sucesso
            data: {
                id: id
            }
        });
    } catch (e: unknown) {
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Ocorreu um erro no processamento da requisição."
        });
    }
}

function filtrarProdutoPorNome(req: Request, res: Response): void {
    try {
        const nome = req.params.nome;

        if (!nome) {
            throw new Error("Favor informar um nome válido.");
        }

        res.status(200).json({
            status: "success",
            data: {
                nome: nome.trim()
            }
        });
    } catch (e: unknown) {
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Ocorreu um erro ao processar a requisição."
        });
    }
}


function novoProduto(req: Request, res: Response): void {
    try {
        const data: any = req.body;

        if (!data.id || !data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer ID, nome, preço e fabricante!");
        }

        // Validação do campo fabricante
        if (
            !data.fabricante.nome ||
            !data.fabricante.endereco ||
            !data.fabricante.endereco.cidade ||
            !data.fabricante.endereco.pais
        ) {
            throw new Error("Fabricante requer nome, endereço com cidade e país!");
        }

        const produto = {
            id: data.id,
            nome: data.nome,
            preco: data.preco,
            fabricante: {
                nome: data.fabricante.nome,
                endereco: {
                    cidade: data.fabricante.endereco.cidade,
                    pais: data.fabricante.endereco.pais,
                },
            },
        };

        res.status(200).json({
            status: "success",
            data: produto
        });
    } catch (e: unknown) {
        res.status(400).json({
            status: "error",
            message: (e as Error).message || "Ocorreu um erro no processamento da requisição."
        });
    }
}

app.get("/api/hello", hello);
app.get("/api/product/:id", filtrarProdutoPorID);
app.get("/api/product/nome/:nome", filtrarProdutoPorNome);
app.post("/api/product", novoProduto);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
