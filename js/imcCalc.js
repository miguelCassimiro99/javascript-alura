// Calculo IMC

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    //dados paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calculo e atribuicao IMC
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso Invalido");
        tdImc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("peso invalido");
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 200) {
        return true;
    }

    if (peso <= 0 || peso > 200) {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3) {
        return true;
    }
    if (altura <= 0 && altura > 3) {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}