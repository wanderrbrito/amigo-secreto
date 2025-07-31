//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    let adcionar = document.querySelector('input').value;
    if (adcionar == '') {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(adcionar);
    }
}
