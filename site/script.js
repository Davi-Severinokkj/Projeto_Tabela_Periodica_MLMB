let botao = document.querySelector("#buttonMenu")
let menu = document.querySelector("#menuDropdown")

botao.addEventListener("click", function(){
    menu.classList.toggle("ativo")
})

let elemento = document.querySelector(".elemento")
elemento.addEventListener('click', abrirModal())

function abrirModal(nome, descricao){
    document.getElementById("modal").style.display = "block"
    document.getElementById("titulo").innerText = nome
    document.getElementById("descricao").innerText = descricao
}

function fecharModal(){
    document.getElementById("modal").style.display = "none"
}