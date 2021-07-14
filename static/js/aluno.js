/**
 * Recebendo o vetor turmas do localStorage
 */
const codigoTurma = +new URLSearchParams(location.search).get("codigoTurma")
const codigoAluno = +new URLSearchParams(location.search).get("codigoAluno")
const turmas = JSON.parse(localStorage.getItem("turmasVetor"))

var n1 = document.querySelector("#n1"),
    n2 = document.querySelector("#n2"),
    n3 = document.querySelector("#n3"),
    submit = document.querySelector("#submit")

/**
 * Modal de Editar Informações
 */
var modalInfo = document.querySelector("#modalInfo");
var btnInfo = document.querySelector("#btnInfo");
var spanInfo = document.getElementsByClassName("exit")[0];

btnInfo.addEventListener("click", (event) => {
    modalInfo.style.display = "block";
})

spanInfo.addEventListener("click", (event) =>{
    modalInfo.style.display = "none";
}) 

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

/**
 * Modal de cadastro de notas
 */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

/**
 * Definindo a turma passada pela url
 */
for (let turma of turmas) {
    if (turma.codigoTurma == codigoTurma) {
        var turmaObj = Object.assign(new Turma("",""), turma)

        /**
         * Definindo o aluno passado pela url
         */
        for(let aluno of turmaObj.alunos){
            if(aluno.matricula == codigoAluno){
                var alunoObj = Object.assign(new Aluno("",""), aluno)
                const infoAluno = document.createElement("p")
                let info = document.querySelector(".info")
                infoAluno.innerHTML = "Nome do aluno: " + (aluno.nome) + "<br>" + "Matricula: " + (aluno.matricula) + "<br>" + "Telefone: " + (aluno.telefone) + "<br>" + "E-mail: " + (aluno.email)
                info.append(infoAluno)
            

                let subInfo = document.querySelector("#submitInfo"),
                    editNome = document.querySelector("#editNome"),
                    editTel = document.querySelector("#editTel"),
                    editEmail = document.querySelector("#editEmail")
        
                let n1Nota = document.querySelector("#n1Nota"),
                    n2Nota = document.querySelector("#n2Nota"),
                    n3Nota = document.querySelector("#n3Nota"),
                    mediaNota = document.querySelector("#mediaNota")

                    n1Nota.innerHTML = alunoObj.notas[0] || "N/a"
                    n2Nota.innerHTML = alunoObj.notas[1] || "N/a"
                    n3Nota.innerHTML = alunoObj.notas[2] || "N/a"
                    mediaNota.innerHTML = alunoObj.calcularMedia(+alunoObj.notas[0], +alunoObj.notas[1], +alunoObj.notas[2])

                    editNome.value = alunoObj.nome
                    editTel.value = alunoObj.telefone
                    editEmail.value = alunoObj.email

                    n1.value = alunoObj.notas[0] || 0
                    n2.value = alunoObj.notas[1] || 0
                    n3.value = alunoObj.notas[2] || 0 

                    /**
                     * Adicionando evento de click ao enviar do editar informações
                     */
                    subInfo.addEventListener("click", (event) => {
                        for (let i = 0; i < turmaObj.alunos.length; i++) {
                            if(turmaObj.alunos[i].matricula == codigoAluno) {
                                var alunoObj = Object.assign(new Aluno("",""), turmaObj.alunos[i])
                                alunoObj.nome = editNome.value
                                alunoObj.telefone = editTel.value
                                alunoObj.email = editEmail.value
                                turmaObj.alunos[i] = alunoObj
     
                                localStorage.setItem("turmasVetor",JSON.stringify(turmas))
                                document.location.reload(true);
                            }   
                        }
                    })

                    /**
                     * Adicionando evento de click ao enviar do cadastro de notas
                     */
                    submit.addEventListener("click", (event) => {
                        for (let i = 0; i < turmaObj.alunos.length; i++) {
                            if(turmaObj.alunos[i].matricula == codigoAluno) {
                                var alunoObj = Object.assign(new Aluno("",""), turmaObj.alunos[i])                              

                                if(n1.value < 0 || n1.value > 10){                                           
                                    return alert("Nota Invalida")
                                } else if(n2.value < 0 || n2.value > 10){                                         
                                    return alert("Nota Invalida")
                                }else if(n3.value < 0 || n3.value > 10){                                           
                                    return alert("Nota Invalida")
                                }else{
                                    alunoObj.cadastraNotas(n1.value, n2.value, n3.value)
                                    turmaObj.alunos[i] = alunoObj
                                }                                                                                          
                                localStorage.setItem("turmasVetor",JSON.stringify(turmas))
                                document.location.reload(true);
                                }   
                            }
                        })
                    }
            }
        }
    } 