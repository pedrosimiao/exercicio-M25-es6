class Aluno {
    #nota = 0;

    constructor(nomeDoAluno) {
        this.nome = nomeDoAluno;
        this.#nota = parseFloat((Math.random() * 10).toFixed(1)); // Gera um número aleatório entre 0 e 10 com um dígito decimal
    }

    acimaDeSeis() {
        return this.#nota >= 6;
    }

    getNota() {
        return this.#nota;
    }
}

export default Aluno;
