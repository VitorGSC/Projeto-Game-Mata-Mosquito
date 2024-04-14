var level = window.location.search;
var altura = 0;
var largura = 0;
var life = 4;
var timer;
var tempo = 20;
var _initGame;



function ajusteTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajusteTamanho()

function initGame() {
    var nivel = document.getElementById('nivel').value;
    if(nivel !== '') {
        window.location.href = "app.html?" + nivel;
    }
}

function setLevel() {
    switch(level) {
        case '?normal': return 2000;
        case '?dificil': return 1000;
        case '?chuck-norris': return 750;
    }
}

function positionRandom() {
    if(document.getElementById('mosca')) document.getElementById('mosca').remove();

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.id = 'mosca';
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.className = heightMosca() + ladoAleatorio();

    // Evento de click
    mosca.addEventListener('click', function() {
        clearInterval(timer);
        positionRandom();
    });

    document.body.appendChild(mosca);
    console.log(_initGame)
}

function heightMosca() {
    var classe = Math.floor(Math.random() * 3);
    switch(classe) {
        case 0: return 'mosquito1 '; 
        case 1: return 'mosquito2 '; 
        case 2: return 'mosquito3 '; 
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    switch(classe) {
        case 0: return 'ladoA';
        case 1: return 'ladoB';
    }
}
