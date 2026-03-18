let botao = document.querySelector("#buttonMenu")
let menu = document.querySelector("#menuDropdown")

botao.addEventListener("click", function(){
    menu.classList.toggle("ativo")
})

let imagem_elemento = document.querySelector("#image_element")
let informacao_elemento = document.querySelector(".info_element")
let button_about_more = document.querySelector("#abou_more_element")