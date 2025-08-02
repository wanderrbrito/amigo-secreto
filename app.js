//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let adcionar = document.querySelector('input').value;
    if (adcionar == '') {
        alert('Você precisa inserir um nome');
    } if (adcionar == 'X' || adcionar == 'x') {
        limparCampo();
        listaAmigos();
    } else {
        amigos.push(adcionar);
        limparCampo();
    }
} 

function listaAmigos() {
    let lista = document.querySelector('ul');
    limpaLista();

    let i = 0;
    while (i < amigos.length) {
        let itemLista = document.createElement('li'); 
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista); 
        i++;
    }
}

function obterAmigo(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

function sortearAmigo() {
    // Verifica se todos os amigosjá foram sorteados
    if (amigos.length === 0) {
        alert('Todos os amigos já foram sorteados!');
        return;
    }
    const itemAmigo = obterAmigo(amigos);
    seuNome = prompt('Digite seu nome para sortear seu amigo secreto:');
    if (seuNome == itemAmigo) {
        alert('Seu amigo secreto e voce mesmo, sorteando nobamente');
        return sortearAmigo();
    }
    else {
        alert(`Seu Amigo Secreto é: ${itemAmigo}`);
    }
    removeAmigo(itemAmigo);
}

function limparCampo() { 
    adcionar = document.querySelector('input');
    adcionar.value = '';
}

function limpaLista() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
}

function removeAmigo(amigo) {
    let indice = amigos.indexOf(amigo);
    if (indice > -1) {
        amigos.splice(indice, 1);
    }
}