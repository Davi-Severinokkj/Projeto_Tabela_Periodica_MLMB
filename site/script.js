// ===== CORES POR CLASSE =====

const cores = {
    metais_alcalinos: "#008080",
    metais_alcalinos_terrosos: "#00FFFF",
    metais_de_transicao: "#6A5ACD",
    metais_pos_transicao: "#7FFFD4",
    semi_metais: "#B0E0E6",
    nao_metais_poliatomicos: "#87CEFA",
    nao_metais_diatomicos: "#5F9EA0",
    gases_nobres: "#BA55D3",
    desconhecidos: "#4B0082",
    lantanideos: "#C71585",
    actinideos: "#FF1493"
}

// aplica cores automaticamente
Object.keys(cores).forEach(classe => {
    document.querySelectorAll(`.${classe}`).forEach(el => {
        el.style.background = cores[classe]
    })
})


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