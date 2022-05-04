const tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("dblclick", (event) => {

    const askPassword = prompt('Digite a senha para remover aluno.');

    if (askPassword != "12345") {
        alert('Senha incorreta! Não foi possível remover aluno do sistema! :D')
        return;
    } else {
        const alvo = event.target;
        const alvoElementoPai = alvo.parentNode
        alvoElementoPai.classList.add("efeito-exclui");
        setTimeout(() => {
            alvo.parentNode.remove();
        }, 500)

    }
})
