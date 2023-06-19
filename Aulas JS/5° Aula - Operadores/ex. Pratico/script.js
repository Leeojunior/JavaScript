var velocidade = document.getElementById("velocidade")
var resultado = document.getElementById("resultado")

function CALCULO(){
    if(velocidade.value > 80){
        var b = parseInt(velocidade.value) - 80
        var multa = b * 5
        resultado.innerHTML = multa
    }else{
        resultado.innerHTML = "Pode passar"
    }
}