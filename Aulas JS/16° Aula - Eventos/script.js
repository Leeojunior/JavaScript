//Eventos 
//*No JavaScript, eventos são ações ou ocorrencias que acontecem na página web que estamos implementando. Esses eventos geralmente invocam funções que irão executar as operações desejadas. Exemplo de eventos são: o usuário clica em um botão na página.*/

/*Exemplos de eventos:
- Clicar no mouse;
- Quando a página é carregada;
- Quando uma imagem foi carregada;
- Quando o mouse passa sobre o elemento;
- Quando um formulário HTML é enviado.*/

let nome = document.getElementById("abc")

function mudar(){
    nome.innerHTML = 'São os alunos de Santo Amaro <3'
}

let datadehoje = document.getElementById('demo')

function data(){
    datadehoje.innerHTML = Date();
}

function CarregarAviso(){
    alert('Você acessou a página')
}

let obj = document.getElementById('obj')
function MudarDeFrase(){
    obj.innerHTML = 'obrigado'
}

function voltarAfrase(){
    obj.innerHTML = 'Passe o mouse aqui!'
}