let botao = document.querySelector("#buttonMenu")
let menu = document.querySelector("#menuDropdown")

botao.addEventListener("click", function(){
    menu.classList.toggle("ativo")
})