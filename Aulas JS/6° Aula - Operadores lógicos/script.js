//1) Crie um programa que peça ao usuário a idade e o titulo de eleitor. Se ele tiver acima de 16 anos e possuir título de eleitor, poderá votar. Se alguma das informações estiver faltando, crie um alert() dizendo que ele não poderá votar.

let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");
let resultado = document.getElementById("resultado");

function Apertar()
{
    if(idade.value >= 16 && titulo.value == "Sim")
{
    alert ("Você poderá votar")
}
else{
    alert("Não poderá votar")
}
}

let preco;
let minutos;
if(minutos <= 200){
    preco = 0.2
}else{
    if(minutos <= 400){
        preco = 0.18
    }else{
        preco = 0.15
    }
}


