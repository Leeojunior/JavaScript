var N1 = document.getElementById("P1");
var N2 = document.getElementById("P2");
var N2 = document.getElementById("P3");
var N2 = document.getElementById("P4");
var soma;
var resultado = document.getElementById("resultado");

function SOMA(){
    soma = (parseInt(P1.value) + parseInt(P2.value) + parseInt(P3.value) + parseInt (P4.value))/4;
    resultado.innerHTML = soma;
}


var dolar = document.getElementById("dolar");
var mult;
var resultado = document.getElementById("conversao")

function CALCULO(){
    mult = parseInt(dolar.value) * 4.91
    conversao.innerHTML = mult
}

