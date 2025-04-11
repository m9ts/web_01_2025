import { aluno } from "./aluno";

const aluno1 = new aluno("Jubersvaldo", "BTV00000", 47);
aluno1.imprimeAluno();

aluno1.nome = "Roberto"; // Alterando de forma direta o campo "nome" na classe "Aluno"

aluno1.imprimeAluno();
