let base = document.getElementById('base')
let altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')
let soma

function calculo(){
   soma = (parseFloat(base.value) * parseFloat(altura.value))/2
   resultado.innerHTML = (soma + 'm²')

}