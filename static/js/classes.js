/**
 * Cadastra uma nova turma
 * @param {number} codigoTurma 
 * @param {number} nomeTurma 
 */
function cadastrarTurma(codigoTurma,nomeTurma){
    let turmasVetor = JSON.parse(localStorage.getItem("turmasVetor"))
    turmasVetor.push(new Turma(codigoTurma, nomeTurma))
    localStorage.setItem("turmasVetor",JSON.stringify(turmasVetor))
}

/**
 * Classe Turma
 */
class Turma {
    /**
     * Construtor da classe Turma
     * @param {number} codigoTurma 
     * @param {string} nomeTurma 
     */
    constructor(codigoTurma, nomeTurma) {
        this.codigoTurma = codigoTurma
        this.nomeTurma = nomeTurma
        this.alunos = []
    }

    /**
     * Cadastra um novo Aluno a turma
     * @param {number} matricula 
     * @param {string} nome 
     * @param {string} telefone 
     * @param {string} email 
     */
    cadastrarAluno(matricula, nome, telefone, email) {
        this.alunos.push(new Aluno(matricula, nome, telefone, email))   
    }

    /**
     * Remove um aluno da turma
     * @param {number} matricula 
     */
    removerAluno(matricula) {
        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].matricula == matricula) {
                this.alunos.splice(i, 1)
            }
        }
    }

    /**
     * Edita as informações de um aluno ja cadastrado
     * @param {number} matricula 
     * @param {string} nome 
     * @param {string} telefone 
     * @param {string} email 
     */
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

/**
 * Classe Aluno
 */
class Aluno {
    /**
     * Construtor da Classe Aluno
     * @param {number} matricula 
     * @param {string} nome 
     * @param {string} telefone 
     * @param {string} email 
     */
    constructor(matricula, nome, telefone, email) {
        this.matricula = matricula
        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.notas = []
    }

    /**
     * Cadastra notas no aluno
     * @param {number} n1 
     * @param {number} n2 
     * @param {number} n3 
     */
    cadastraNotas(n1, n2, n3) {
                this.notas = [n1,n2,n3]
    }

    /**
     * Calcula a media do aluno
     * @param {number} n1 
     * @param {number} n2 
     * @param {number} n3 
     */
    calcularMedia(n1, n2, n3) {
            return ((n1 + n2 + n3) / 3).toFixed(2)
    }
}
