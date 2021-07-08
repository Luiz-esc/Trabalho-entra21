class Turma {
    constructor(codigoTurma, nomeTurma) {
        this.codigoTurma = codigoTurma
        this.nomeTurma = nomeTurma
        this.alunos = []
    }
    cadastrarAluno(matricula, nome, telefone, email) {
        this.alunos.push = new Aluno(matricula, nome, telefone, email)   
    }
}

class Aluno {
    constructor(matricula, nome, telefone, email) {
        this.matricula = matricula
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }
}