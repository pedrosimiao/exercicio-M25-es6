import { gerarNome } from './gerar_nome.js';
import Aluno from './aluno.js';

async function criarTurma(numeroDeAlunos) {
    const turma = [];
    for (let i = 0; i < numeroDeAlunos; i++) {
        const nome = await gerarNome(); 
        const aluno = new Aluno(nome); 
        turma.push(aluno);
    }
    return turma;
}


async function main() {

    const turma = await criarTurma(20);

    const alunosAcimaDeSeis = turma.filter(aluno => aluno.acimaDeSeis());

    // Exibindo os alunos
    console.log(`\nTurma de ${turma.length} alunos\n`);
    turma.forEach(aluno => {
        console.log(`Nome: ${aluno.nome}, Nota: ${aluno.getNota()}`);
    });

    console.log("\n----------------------------------------------------------------------------------\n");

    // Exibindo os alunos com nota acima de seis no console
    console.log(`\nAlunos com nota acima de seis: ${alunosAcimaDeSeis.length} alunos\n`);
    alunosAcimaDeSeis.forEach(aluno => {
        console.log(`Nome: ${aluno.nome}, Nota: ${aluno.getNota()}`);
    });

    console.log();
}

main();
