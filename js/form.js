//Formulario

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    // prevent the default event on the button thats submits the form
    event.preventDefault();

    // each form we can access the input using the input's name. So to catch the patient's input name we can use form.name for example
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);


    var erros = validaPaciente(paciente);


    if (erros.length > 0) {
        exibeMensagensErro(erros);
        console.log(erros);
        return;
    }
    adicionaPacienteTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // appending the elements on the rows
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso invalido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura invalida");
    }

    if (paciente.nome.length == 0 || paciente.peso.length == 0 || paciente.altura.length == 0 || paciente.gordura.length == 0) {
        erros.push("Todos os campos devem ser preenchidos");
    }
    return erros;

}