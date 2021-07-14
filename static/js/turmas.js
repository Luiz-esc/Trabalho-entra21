let submit = document.querySelector("#sub"),
    codigoTurma = document.querySelector("#codigoTurma"),
    nomeTurma = document.querySelector("#nomeTurma"),
    turmas = JSON.parse(localStorage.getItem("turmasVetor")),
    erro = document.querySelector("#texto-erro")

    if(turmas == 0){
       erro.innerHTML = "Não há turmas cadastradas" 
    }

window.addEventListener("load", (event) => {
let divTurmas = document.querySelector(".divTurmas")

for (let turma of turmas) {
    const linkTurma = document.createElement("a")

    linkTurma.href = `alunos.html?codigoTurma=${turma.codigoTurma}`
    linkTurma.innerHTML = "Nome da Turma: " + (turma.nomeTurma || "Sem Nome" ) + "<br>" + "Código da Turma: " + (turma.codigoTurma || "Sem")

    divTurmas.append(linkTurma)
}
})

submit.addEventListener('click', (event) => {
    for(let i = 0;i < turmas.length;i++){
        let codigo = codigoTurma.value
        if(codigo == turmas[i].codigoTurma) {
            alert("Código já utilizado")
            return
        }
    }
if(codigoTurma.value == ""){
    alert("Código Inválido")
    return
} else if (nomeTurma.value == ""){
    alert("Nome Inválido")
    return
}
cadastrarTurma(codigoTurma.value  ,nomeTurma.value)
document.location.reload(true);
})
