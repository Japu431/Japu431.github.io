let buscarAlunoNoBancoDeDados = document.querySelector("#buscar-aluno");

let jaPegou = false;

buscarAlunoNoBancoDeDados.addEventListener('click', function () {
    if (jaPegou == false) {
        jaPegou = true;
        for (let i = 0; i < db.length; i++) {
            const aluno = db[i];
            let trAluno = montaTrAluno(aluno);
            renderAluno(trAluno)
        }
    } else {
        let msgErro = document.querySelector("#erros")
        msgErro.classList.remove("efeito-exclui")
        msgErro.textContent = "API de alunos já foi buscado!";
        setTimeout(() => {
            msgErro.classList.add("efeito-exclui")
            msgErro.innerHTML = "";
        }, 5000)
        return;
    }
})
