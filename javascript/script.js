let cartas = [
    'imagens/imagem1.gif', 'imagens/imagem1.gif',
    'imagens/imagem2.gif', 'imagens/imagem2.gif',
    'imagens/imagem3.gif', 'imagens/imagem3.gif',
    'imagens/imagem4.gif', 'imagens/imagem4.gif',
    'imagens/imagem5.gif', 'imagens/imagem5.gif',
    'imagens/imagem6.gif', 'imagens/imagem6.gif',
    'imagens/imagem7.gif', 'imagens/imagem7.gif',
    'imagens/imagem8.gif', 'imagens/imagem8.gif',
    'imagens/imagem9.gif', 'imagens/imagem9.gif',
    'imagens/imagem10.gif', 'imagens/imagem10.gif'
];

let atual = [];
let adivinhando = false;
let correspondencias = 0;
let contagemMovimentos = 0;
let pontuacao = 100;
let vitorias = 0;
let derrotas = 0;

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function configurarCartas() {
    let tabuleiro = document.getElementById('tabuleiro');
    tabuleiro.innerHTML = '';
    embaralharArray(cartas);
    cartas.forEach((imagem, index) => {
        let carta = document.createElement('div');
        carta.dataset.item = imagem;
        carta.dataset.index = index;
        carta.innerHTML = `<img src="${imagem}" alt="Imagem"><div class="cover"></div>`;
        carta.onclick = aoClicarCarta;
        tabuleiro.appendChild(carta);
    });
}

function aoClicarCarta(e) {
    if (adivinhando) return;

    let alvo = e.currentTarget;
    if (atual.length < 2 && !alvo.classList.contains('flipped')) {
        alvo.classList.add('flipped');
        atual.push(alvo);
    }

    if (atual.length === 2) {
        adivinhando = true;
        contagemMovimentos++;
        document.getElementById('moves').textContent = 'Movimentos: ' + contagemMovimentos;

        if (atual[0].dataset.item === atual[1].dataset.item) {
            correspondencias++;
            atual = [];
            adivinhando = false;

            if (correspondencias === cartas.length / 2) {
                alert('Você venceu!');
                vitorias++;
                document.getElementById('wins').textContent = 'Vitórias: ' + vitorias;
            }
        } else {
            setTimeout(() => {
                atual.forEach(carta => carta.classList.remove('flipped'));
                atual = [];
                adivinhando = false;
            }, 1000);
        }

        pontuacao--;
        document.getElementById('score').textContent = 'Pontuação: ' + pontuacao;

        if (pontuacao <= 0) {
            alert('Você perdeu!');
            derrotas++;
            document.getElementById('losses').textContent = 'Derrotas: ' + derrotas;
            reiniciarJogo();
        }
    }
}

function reiniciarJogo() {
    atual = [];
    adivinhando = false;
    correspondencias = 0;
    contagemMovimentos = 0;
    pontuacao = 100;

    document.getElementById('moves').textContent = 'Movimentos: ' + contagemMovimentos;
    document.getElementById('score').textContent = 'Pontuação: ' + pontuacao;
    configurarCartas();
}

configurarCartas();