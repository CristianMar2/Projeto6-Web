// Array com as cartas do jogo, onde cada imagem aparece duas vezes
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

// Variáveis de estado do jogo
let atual = [];             // Cartas atualmente viradas
let adivinhando = false;    // Bloqueia interações enquanto duas cartas estão viradas
let correspondencias = 0;   // Quantidade de pares encontrados
let contagemMovimentos = 0; // Contagem de movimentos feitos
let pontuacao = 100;        // Pontuação inicial
let vitorias = 0;           // Contagem de vitórias
let derrotas = 0;           // Contagem de derrotas

// Função para embaralhar o array de cartas usando o algoritmo Fisher-Yates
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

// Configura as cartas no tabuleiro
function configurarCartas() {
    let tabuleiro = document.getElementById('tabuleiro'); // Seleciona o tabuleiro
    tabuleiro.innerHTML = ''; // Limpa o tabuleiro antes de configurar as cartas
    embaralharArray(cartas); // Embaralha as cartas

    // Cria os elementos DOM das cartas e os adiciona ao tabuleiro
    cartas.forEach((imagem, index) => {
        let carta = document.createElement('div'); // Cria um elemento <div> para a carta
        carta.dataset.item = imagem;              // Atribui o caminho da imagem ao atributo data-item
        carta.dataset.index = index;             // Atribui o índice ao atributo data-index
        carta.innerHTML = `
            <img src="${imagem}" alt="Imagem">  
            <div class="cover"></div>         
        `;
        carta.onclick = aoClicarCarta;           // Adiciona o evento de clique
        tabuleiro.appendChild(carta);            // Adiciona a carta ao tabuleiro
    });
}

// Manipula o clique em uma carta
function aoClicarCarta(e) {
    if (adivinhando) return; 

    let alvo = e.currentTarget; // Carta clicada
    if (atual.length < 2 && !alvo.classList.contains('flipped')) {
        alvo.classList.add('flipped'); // Mostra a carta (adiciona classe 'flipped')
        atual.push(alvo);             // Adiciona a carta ao array de cartas atualmente viradas
    }

    if (atual.length === 2) { // Se duas cartas estiverem viradas
        adivinhando = true; // Bloqueia novas interações enquanto verifica o par
        contagemMovimentos++; // Incrementa a contagem de movimentos
        document.getElementById('moves').textContent = 'Movimentos: ' + contagemMovimentos;

        if (atual[0].dataset.item === atual[1].dataset.item) { // Verifica se as cartas combinam
            correspondencias++; // Incrementa a contagem de pares encontrados
            atual = [];         // Limpa o array de cartas viradas
            adivinhando = false; // Permite novas interações

            // Verifica se todas as cartas foram encontradas
            if (correspondencias === cartas.length / 2) {
                alert('Você venceu!'); 
                vitorias++;            
                document.getElementById('wins').textContent = 'Vitórias: ' + vitorias;
            }
        } else {
            // Se as cartas não combinarem, vira-as de volta após um intervalo
            setTimeout(() => {
                atual.forEach(carta => carta.classList.remove('flipped')); // Remove a classe 'flipped'
                atual = []; // Limpa o array de cartas viradas
                adivinhando = false; // Permite novas interações
            }, 1000);
        }

        // Decrementa a pontuação
        pontuacao--;
        document.getElementById('score').textContent = 'Pontuação: ' + pontuacao;
        
        // Verifica se a pontuação chegou a zero
        if (pontuacao <= 0) {
            alert('Você perdeu!');
            derrotas++;
            document.getElementById('losses').textContent = 'Derrotas: ' + derrotas;
            reiniciarJogo();
        }
    }
}

// Reinicia o jogo para uma nova partida
function reiniciarJogo() {
    atual = [];
    adivinhando = false;
    correspondencias = 0;
    contagemMovimentos = 0;
    pontuacao = 100;

    // Atualiza os elementos DOM com os valores reiniciados
    document.getElementById('moves').textContent = 'Movimentos: ' + contagemMovimentos;
    document.getElementById('score').textContent = 'Pontuação: ' + pontuacao;

    configurarCartas();
}

// Inicializa o tabuleiro ao carregar a página
configurarCartas();