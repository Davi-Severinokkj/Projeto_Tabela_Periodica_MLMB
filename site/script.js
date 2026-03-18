document.querySelectorAll(".metais_alcalinos").forEach(el => {
    el.style.background = "#008080"
})

document.querySelectorAll(".metais_alcalinos_terrosos").forEach(el => {
    el.style.background = "#00FFFF"
})

document.querySelectorAll(".metais_de_transição").forEach(el => {
    el.style.background = "#6A5ACD"
})
let botao = document.querySelector("#buttonMenu")
let menu = document.querySelector("#menuDropdown")

botao.addEventListener("click", function(){
    menu.classList.toggle("ativo")
})

window.onload = () => {
    document.getElementById("modal").style.display = "none"
}



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