var metros = document.getElementById("metros")
var calculo;
var resultado1 = document.getElementById("metragem")

function CONVERSAO(){
    calculo = (parseInt(metros.value)) * 100
    metragem.innerHTML = calculo
}