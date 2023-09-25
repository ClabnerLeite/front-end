const botaoADD = document.querySelector("#botaoADD")
const botaoDIMI = document.querySelector("#botaoDIMI")
const botaoZORO = document.querySelector("#botaoZERA")

const contadorElemento = document.querySelector("#contador")

let contador = 0;

function zerar()
{
    contador=0;
    contadorElemento.textContent = contador;
}
function dimi()
{
    contador--;
    contadorElemento.textContent = contador;
    if (contador < 0) {
        document.querySelector("#alert").innerHTML =
        `
        
        <div class="alert alert-danger fade show" role="alert"> 
            <span> não é permitivo esses numeros </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        
        `
    }
}
function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}


botaoADD.addEventListener("click", aumentarContador);
botaoDIMI.addEventListener("click", dimi);
botaoZORO.addEventListener("click", zerar);

