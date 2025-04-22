function sete() {
     var input = document.getElementById("conta");
     input.value += 7;
}

function oito() {
    var input = document.getElementById("conta");
    input.value += 8;
}

function nove() {
    var input = document.getElementById("conta");
    input.value += 9;
}

function quatro() {
    var input = document.getElementById("conta");
    input.value += 4;
}

function cinco() {
    var input = document.getElementById("conta");
    input.value += 5;
}

function seis() {
    var input = document.getElementById("conta");
    input.value += 6;
}

function um() {
    var input = document.getElementById("conta");
    input.value += 1;
}

function dois() {
    var input = document.getElementById("conta");
    input.value += 2;
}

function tres() {
    var input = document.getElementById("conta");
    input.value += 3;
}

function zero() {
    var input = document.getElementById("conta");
    input.value += 0;
}

function multiplicacao() {
    var input = document.getElementById("conta");
    input.value += "*";
}

function divisao() {
    var input = document.getElementById("conta");
    input.value += "/";
}

function subtracao() {
    var input = document.getElementById("conta");
    input.value += "-";
}

function adicao() {
    var input = document.getElementById("conta");
    input.value += "+";
}

function apagar() {
    var input = document.getElementById("conta");
    input.value = "";
}

function calcular() {
    let input = document.getElementById('conta').value 
    let partes = input.match(/(\d+)([\+\-\*\/])(\d+)/);

    let num1 = parseFloat(partes[1])
    let operador = partes[2]
    let num2 = parseFloat(partes[3])

    const operacoes = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
        
    }

    let resultado = operacoes[operador](num1, num2)

    document.getElementById("conta").value = resultado;
}