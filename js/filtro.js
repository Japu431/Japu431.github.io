
let filtro = document.querySelector("#filtra-aluno");

filtro.addEventListener("input", () => {
    let alunos = document.querySelectorAll(".aluno");

    if (filtro.value.length > 0) {
        for (let i = 0; i < alunos.length; i++) {
            let aluno = alunos[i];

            let tdNome = aluno.querySelector('.info-nome');
            let nome = tdNome.textContent;

            const pattern = new RegExp(filtro.value, 'i')

            !pattern.test(nome) ? aluno.classList.add('invisivel') : aluno.classList.remove('invisivel')

        }
    } else {
        for (let i = 0; i < alunos.length; i++) {
            const aluno = alunos[i];
            aluno.classList.remove("invisivel");
        }
    }
})