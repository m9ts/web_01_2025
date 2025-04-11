// Importando resultados do arquivo aluno.ts
import { Aluno } from "./Aluno";

const aluno1 = new Aluno("Jubersvaldo", "BTV00000", 47);
aluno1.imprimeAluno();

aluno1.nome = "Roberto"; // Alterando de forma direta o campo "nome" na classe "Aluno"

aluno1.imprimeAluno();

// Importando resultados do arquivo ex5.ts
import { Produto } from "./ex5";

const prod = new Produto("Notebook", 3500);
prod.mostrarInformacoes();
