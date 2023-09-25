var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function animarBarradeProgresso()
{
    var progresso = 0; 
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            //? limpar valor variavel 
            clearInterval(intervalo);
            barraProgresso.style.display = "none"
            document.querySelector("#mostrar").innerHTML =
            ` <div class="alert alert-success fade show" role="alert"> 
            <span> olá, bem vindo ao Sesi</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
            `
        }
        else{
            progresso++;
            barra.style.width = progresso + "%";
        }
    }, 50);
}