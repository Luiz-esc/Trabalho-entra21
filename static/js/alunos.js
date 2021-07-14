const codigoTurma = +new URLSearchParams(location.search).get("codigoTurma")
const turmas = JSON.parse(localStorage.getItem("turmasVetor"))

let erro = document.querySelector("#erro")

let matricula = document.querySelector("#matricula"),
    nome =  document.querySelector("#nome"),
    telefone =  document.querySelector("#telefone"),
    email =  document.querySelector("#email"),
    submit = document.querySelector("#submit")

for (let turma of turmas) {
    if (+turma.codigoTurma === codigoTurma) {
        var turmaObj = Object.assign(new Turma("",""), turma)

        if(turmaObj.alunos == 0){
            erro.innerHTML = "Não há alunos cadastrados"
            erro.style.display = "block"
        }

        submit.addEventListener("click", (event) => {

            for(let i = 0;i < turmaObj.alunos.length;i++){
                if(+matricula.value == +turmaObj.alunos[i].matricula){
                    alert("Matricula já utilizada")
                    return
                }
            }
            turmaObj.cadastrarAluno(matricula.value, nome.value, telefone.value, email.value)
            localStorage.setItem("turmasVetor",JSON.stringify(turmas))
            document.location.reload(true);
        })

        window.addEventListener("load", (event) =>{
            let div = document.querySelector(".alunos")
                for (let aluno of turma.alunos) {
                    const linkAluno = document.createElement("a")
                    const excluirAluno = document.createElement("a")

                    linkAluno.href = `aluno.html?codigoTurma=${codigoTurma}&codigoAluno=${aluno.matricula}`
                    linkAluno.innerHTML = "Nome do aluno: " + (aluno.nome) + "<br>" + "Matricula: " + (aluno.matricula) + "<br>"

                    excluirAluno.innerHTML = "X"

                    div.append(linkAluno)
                    div.append(excluirAluno)
                    div.append("⠀")

                    excluirAluno.addEventListener('click', (event) => {
                        var alunoSelecionado = turma.alunos.indexOf(aluno)
                        if (alunoSelecionado > -1) {
                            turma.alunos.splice(alunoSelecionado, 1)
                        }
                        localStorage.setItem("turmasVetor",JSON.stringify(turmas))
                        document.location.reload(true);
                    }) 
                }
            })
        }        
    } 