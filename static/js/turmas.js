let submit = document.querySelector("#sub"),
    codigoTurma = document.querySelector("#codigoTurma"),
    nomeTurma = document.querySelector("#nomeTurma"),
    turmas = JSON.parse(localStorage.getItem("turmasVetor")),
    erro = document.querySelector("#texto-erro")

/**
 * Verificar se o vetor de turmas está vazio
 */
    if(turmas == 0){
       erro.innerHTML = "Não há turmas cadastradas" 
    }

/**
 * Evento no carregar da pagina para colocal as turmas
 */
window.addEventListener("load", (event) => {
    let divTurmas = document.querySelector(".divTurmas")

    /**
     * Gerando os links das turmas
     * Adicionando as turmas no html
     */
    for (let turma of turmas) {
        const linkTurma = document.createElement("a")
        const excluirTurma = document.createElement("a")

        linkTurma.href = `alunos.html?codigoTurma=${turma.codigoTurma}`
        linkTurma.innerHTML = "Nome da Turma: " + (turma.nomeTurma || "Sem Nome" ) + "<br>" + "Código da Turma: " + (turma.codigoTurma || "Sem")

        excluirTurma.innerHTML = "X"
        excluirTurma.style.backgroundColor = "blackj"

        divTurmas.append(linkTurma)
        divTurmas.append(excluirTurma)
        divTurmas.append("⠀")

        /**
         * Adicionaod evento ao clicar para excluir turma
         */
        excluirTurma.addEventListener('click', (event) => {
            var turmaSelecionada = turmas.indexOf(turma)
            if (turmaSelecionada > -1) {
                turmas.splice(turmaSelecionada, 1)
            }
            localStorage.setItem("turmasVetor",JSON.stringify(turmas))
            document.location.reload(true);
        }) 
    }
})

/**
 * Adicionado evento de click para cadastrar turma
 */
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
