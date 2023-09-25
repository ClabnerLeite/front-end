function Enviar ()
{
    var nome = document.querySelector(".innome")
    var idade = document.querySelector(".inidade")
    var cidade = document.querySelector(".incidade")
    var Mostrar = document.getElementById('Mostrar')
    
    if (nome.value == "" || idade == "" || cidade == "") {
        Mostrar.innerHTML =  ` <div class="alert alert-danger fade show" role="alert"> 
        <span> Preencha todos os campos</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
        `
    }else {
        Mostrar.innerHTML =  ` <div class="alert alert-success fade show" role="alert"> 
        <span> Informações: ${nome.value}, ${idade.value}, ${cidade.value}</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
        `
    }

}