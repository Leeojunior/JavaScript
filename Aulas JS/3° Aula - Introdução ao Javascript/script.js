var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var soma;
var resultado = document.getElementById("resultado");

function SOMA(){
    soma = parseInt(N1.value) + parseInt(N2.value);
    resultado.innerHTML = soma;
}
