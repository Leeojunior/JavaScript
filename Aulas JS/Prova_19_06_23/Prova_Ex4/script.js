let aluno1 = document.getElementById('nota1');
let aluno2 = document.getElementById('nota2');
let aluno3 = document.getElementById('nota3');
let aluno4 = document.getElementById('nota4');
let media;
let valor = document.getElementById('resultado');

function Calcular(){


media = (parseInt(aluno1.value) + parseInt(aluno2.value) + parseInt(aluno3.value) + parseInt(aluno4.value)) /4;
if(media >= 7)
{
    valor.innerHTML = media + " Aprovado";

}else{
    valor.innerHTML = "Reprovado";
}
}
