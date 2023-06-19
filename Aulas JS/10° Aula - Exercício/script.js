//1) Desenvolva um programa que receba como entrada um número que represente um dos 7 doas da semana e imprima na tela se esse dia é útil, final de semana ou inválido.
//Considere que domingo é dia 1 e sábado dia 7.

let diaDaSemana = document.getElementById("diaDaSemana")

function botao()
{

    switch(diaDaSemana.value)
{
    case "1":
    alert ("Hoje é final de semana")
    break;

    case "2":
    alert ("Hoje é dia útil")
    break;

    case "3":
    alert ("Hoje é dia útil")
    break;

    case "3":
    alert ("Hoje é dia útil")
    break;

    case "4":
    alert ("Hoje é dia útil")
    break;

    case "5":
    alert ("Hoje é dia útil")
    break;

    case "6":
    alert ("Hoje é final de semana")
    break;

    default:
        alert ("Inválido")
        break;


}
}

let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let operador = document.getElementById("operador")
let resultado;
let apresentacao = document.getElementById("resultado")

function calcular()
{
    switch(operador.value){
        case "+": resultado = parseInt(valor1.value) + parseInt(valor2.value)
                apresentacao.innerHTML = resultado
                break
                
        case "-": resultado = parseInt(valor1.value) - parseInt(valor2.value)
                apresentacao.innerHTML = resultado
                break

        case "*": resultado = parseInt(valor1.value) * parseInt(valor2.value)
                apresentacao.innerHTML = resultado
                break

        case "/": resultado = parseInt(valor1.value) / parseInt(valor2.value)
                apresentacao.innerHTML = resultado
                break
                
        

    }
}
