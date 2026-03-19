// ===== MENU =====
let botao = document.querySelector("#buttonMenu")
let menu = document.querySelector("#menuDropdown")

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo")
})


// ===== MODAL =====
const modal = document.getElementById("modal")
const titulo = document.getElementById("titulo")
const descricao = document.getElementById("descricao")

// adiciona evento em TODOS os elementos
document.querySelectorAll(".elemento").forEach(el => {
    el.addEventListener("click", () => {
        titulo.innerText = el.dataset.nome
        descricao.innerText = el.dataset.desc
        modal.style.display = "block"
    })
})

// fechar modal
function fecharModal(){
    modal.style.display = "none"
}

// fechar clicando fora
window.addEventListener("click", (e) => {
    if(e.target === modal){
        fecharModal()
    }
})

// garantir que inicia fechado
window.onload = () => {
    modal.style.display = "none"
}