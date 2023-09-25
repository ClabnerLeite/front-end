//! selecionando o botão pelo id 
const botao = document.querySelector("#botao")
const contadorElemento = document.querySelector("#contador")

//* inicializando contador
let contador = 0;

//* função q sera chamada quando o botão for clicado 
function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}

//* adicionando ouvinte do evento para clique do botão 

botao.addEventListener("click", aumentarContador);
