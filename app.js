//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    let adcionar = document.querySelector('input').value;
    if (adcionar == '') {
        alert('Por favor, insira um nome');
    } if (adcionar == 'X' || adcionar == 'x') {
        limparCampo();
        listaAmigos();
    }
        amigos.push(adcionar);
        limparCampo();
        console.log(amigos);
} 

function listaAmigos() {  
    let i = 0;
    while (i < amigos.length) {
        let lista = document.querySelector('ul');
        lista.innerHTML = amigos[i];
        i++
    }
    
}

function sortearAmigo() {
    // criar codigo
}

function limparCampo() { 
    adcionar = document.querySelector('input');
    adcionar.value = '';
}
