let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")

function Aperte()
{
    switch(numero.value)
    {
        case "1":
            resposta.innerHTML = "Você escolheu, Maçã"
            break;
            case "2":
            resposta.innerHTML = "Você escolheu, Banana"
            break;
            default:
                resposta.innerHTML = "Não tem essa parada não, doidão!";
                break
    }
}