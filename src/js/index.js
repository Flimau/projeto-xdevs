/*
objetivo 1: quando clicar na eta de avançar deverá ser mostrado o próximo personagem
    passo 1: dar um jeito de pegar o elemento HTML da seta avançar
    passo 2: identificar o clique do usuário na seta avançar
    passo 3: fazer aparecer o próximo personagem
    passo 4: buscar o cartao que está selecionado e esconder
objetivo 2: quando clicar na eta de voltar deverá ser mostrado o personagem anterior
    passo 1: dar um jeito de pegar o elemento HTML da seta voltar
    passo 2: identificar o clique do usuário na seta voltar
    passo 3: fazer aparecer o personagem anterior
    passo 4: buscar o cartao que está selecionado e esconder

    identificadores para busca
    # busca por id
    . busca por uma classe
    */

// 1.1 pegar o elemento HTML da seta avançar e 2.1 identificar o clique do usuário no bt voltar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// 1.2 identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1) return;
    // 1.4 buscar o cartao que estava selecionado e esconder, isso deve ser feito antes de buscar o proximo card
    esconderCartoes();

    // 1.3 fazer aparecer o próximo personagem (colocando a classe "selecionado" para q ele apareça)

    cartaoAtual++;
    atribuiSelecionado();
})



// 2.2 identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function(){

    if(cartaoAtual === 0) return;
    // 2.4 buscar o cartao que estava selecionado e esconder, isso deve ser feito antes de buscar o proximo card
    esconderCartoes();

    // 2.3 fazer aparecer o próximo personagem (colocando a classe "selecionado" para q ele apareça)
    cartaoAtual--;
    atribuiSelecionado();
})
function atribuiSelecionado() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoes() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

