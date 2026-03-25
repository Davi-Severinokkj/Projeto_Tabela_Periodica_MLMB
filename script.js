// ===== MENU =====
let botao = document.querySelector("#buttonMenu")
let menu = document.querySelector("#menuDropdown")



botao.addEventListener("click", () => {
    menu.classList.toggle("ativo")

    if(menu.classList.contains("ativo")){
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
})


let tabelaPeriodica = document.querySelector(".table-periodic")
let botaoTabela = document.querySelector("#buttonTableP")

botaoTabela.addEventListener("click", ()=>{
    tabelaPeriodica.classList.toggle('form')
})


// ===== MODAL =====

const modal = document.getElementById("modal")
const imagem = document.getElementById("imagem_elemento")
const nome = document.getElementById("nome")
const simbolo = document.getElementById("simbolo_modal")
const numberAtomic = document.getElementById("numero_atomico")
const massAtomic = document.getElementById("massa_atomica")
const descricao = document.getElementById("descricao")


// adiciona evento em TODOS os elementos
document.querySelectorAll(".elemento").forEach(el => {
    el.addEventListener("click", () => {
        document.body.style.overflow = 'hidden'
        
        imagem.src = el.dataset.imagem
        nome.innerText = el.dataset.nome
        simbolo.innerHTML = el.dataset.simbolo
        numberAtomic.innerHTML = el.dataset.numberAtomic
        massAtomic.innerHTML = el.dataset.massAtomic
        descricao.innerText = el.dataset.descricao
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

// buscar pelo menu hambúrguer

let links = document.querySelectorAll("#menuDropdown a")
let ativo = null

let voltar = document.getElementsByTagName('body')
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()

        

        let classe = link.getAttribute("data-classe")

        if(ativo === classe){
            document.querySelectorAll(".elemento").forEach(el => {
                el.classList.remove("aaaa")
            })
            ativo = null

            document.body.style.overflow = "auto" // 👈 AQUI
            return
        }

        ativo = classe

        document.querySelectorAll(".elemento").forEach(el => {
            el.classList.remove("aaaa")
        })

        document.querySelectorAll("." + classe).forEach(el => {
            el.classList.add("aaaa")
        })

        document.body.style.overflow = "auto" // 👈 E AQUI
        document.body.style.overflow = "auto"
        menu.classList.remove("ativo")
    })
})