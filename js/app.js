const adicionarAluno = document.querySelector('#adicionar-aluno');

adicionarAluno.addEventListener('click', function (e) {
    e.preventDefault();
    const form = document.querySelector('#form-adiciona');
    let aluno = obtemDadosAluno(form);
    let erros = validaCampos(aluno);

    if (erros.length > 0) {
        mostraMensagensDeErro(erros);
        return;
    }

    let trAluno = montaTrAluno(aluno);
    renderAluno(trAluno);

    form.reset();

    document.querySelector('#erros').innerHTML = '';

})


function verificaNotaVermelha(alunoMF) {
    if (alunoMF < 6.0) {
        return true;
    } else {
        return false;
    }
}


function renderAluno(trAluno) {
    let tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(trAluno)
}

function montaTrAluno(aluno) {
    let tr = document.createElement('tr');

    if (aluno.mediaFinal < 6.0) {
        tr.classList.add('aluno');
        tr.classList.add("nota-vermelha");
    } else {
        tr.classList.add('aluno');
    }
    tr.appendChild(montaTdAluno(aluno.nome, "info-nome"))
    tr.appendChild(montaTdAluno(aluno.turma, "info-turma"))
    tr.appendChild(montaTdAluno(aluno.nota1tri, "info-primeiro-trimestre"))
    tr.appendChild(montaTdAluno(aluno.nota2tri, "info-segundo-trimestre"))
    tr.appendChild(montaTdAluno(aluno.nota3tri, "info-terceiro-trimestre"))
    tr.appendChild(montaTdAluno(aluno.mediaFinal, "info-media-final"))

    return tr;
}

function montaTdAluno(content, classe) {
    let td = document.createElement('td');

    td.textContent = content;
    td.classList.add(classe);

    return td;
}

function validaCampos(aluno) {
    const messages = [];

    if (aluno.nome == '') messages.push("O campo nome não pode ser vazio!");
    if (aluno.turma == '') messages.push("O campo turma não pode ser vazio!");
    if (aluno.nota1tri == '') messages.push("O campo nota 1-trimestre não pode ser vazio!");
    if (aluno.nota2tri == '') messages.push("O campo nota 2-trimestre nome não pode ser vazio!");
    if (aluno.nota3tri == '') messages.push("O campo nota 3-trimestre nome não pode ser vazio!");

    return messages;
}

function mostraMensagensDeErro(erros) {
    let ul = document.querySelector('#erros');

    ul.innerHTML = '';

    erros.forEach(erro => {
        let li = document.createElement('li');
        li.classList.add('messages-erro');
        li.textContent = erro;
        ul.appendChild(li);
    })
}


function obtemDadosAluno(form) {
    let nome = form.querySelector("#nome");
    let turma = form.querySelector("#turma");
    let nota1tri = form.querySelector("#primeiro-trimestre")
    let nota2tri = form.querySelector("#segundo-trimestre")
    let nota3tri = form.querySelector("#terceiro-trimestre")

    let aluno = {
        nome: nome.value,
        turma: turma.value,
        nota1tri: nota1tri.value,
        nota2tri: nota2tri.value,
        nota3tri: nota3tri.value,
        mediaFinal: ((nota1tri.value * 3 + nota2tri.value * 3 + nota3tri.value * 4) / 10).toFixed(1)
    }

    return aluno;
}