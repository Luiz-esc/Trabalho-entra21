
function cadastrarTurma(codigoTurma,nomeTurma){
    let turmasVetor = JSON.parse(localStorage.getItem("turmasVetor"))
    turmasVetor.push(new Turma(codigoTurma, nomeTurma))
    localStorage.setItem("turmasVetor",JSON.stringify(turmasVetor))
}


class Turma {
    constructor(codigoTurma, nomeTurma) {
        this.codigoTurma = codigoTurma
        this.nomeTurma = nomeTurma
        this.alunos = []
    }

    cadastrarAluno(matricula, nome, telefone, email) {
        this.alunos.push(new Aluno(matricula, nome, telefone, email))   
    }

    removerAluno(matricula) {
        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].matricula == matricula) {
                this.alunos.splice(i, 1)
            }
        }
    }

    editarInformações(matricula, nome, telefone, email) {
        for (let aluno of this.alunos) {
            if (aluno.matricula == matricula) {
                aluno.nome = nome
                aluno.telefone = telefone
                aluno.email = email
            }
        }
    }
}

class Aluno {
    constructor(matricula, nome, telefone, email) {
        this.matricula = matricula
        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.notas = []
    }

    cadastraNotas(n1, n2, n3) {
                this.notas = [n1,n2,n3]
    }

    calcularMedia(n1, n2, n3) {
            return (n1 + n2 + n3) / 3
    }
}
