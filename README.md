Jogo da Memória
Este repositório contém o código de um Jogo da Memória interativo, desenvolvido com HTML, CSS, e JavaScript. 
O jogo desafia o jogador a encontrar todos os pares de cartas enquanto gerencia pontuações e movimentos.

Funcionalidades

Interface Responsiva:
Tabuleiro dinâmico gerado via JavaScript.

Lógica de Jogo:
Pontuação inicial de 100, que é reduzida a cada movimento incorreto.
Contagem de movimentos.
Contagem de vitórias e derrotas.

Feedback ao Jogador:
Alerta de vitória ao encontrar todos os pares.
Alerta de derrota quando a pontuação chega a zero.

Reinício Fácil:
Botão para começar uma nova partida.
Tabuleiro embaralhado a cada reinício.

Tecnologias Utilizadas
HTML5
CSS3
JavaScript (ES6)

Como Jogar

Objetivo:
Encontrar todos os pares de cartas no menor número de movimentos.

Como Funciona:
Clique em duas cartas para virá-las.
Se as cartas combinarem, elas permanecem visíveis.
Se não combinarem, elas voltam a ficar escondidas após um breve intervalo.

Fim de Jogo:
Vitória: Quando todos os pares são encontrados.
Derrota: Quando a pontuação atinge 0 antes de encontrar todos os pares.

Como Visualizar 
Acesso Online: https://cristianmar2.github.io/Projeto6-Web/

Detalhes do Código

HTML
Estrutura básica do tabuleiro e controles, incluindo:
Elementos para exibir movimentos, pontuação, vitórias e derrotas.
Botão para reiniciar o jogo.

JavaScript
Funções Principais:
configurarCartas() – Prepara o tabuleiro com cartas embaralhadas.
aoClicarCarta(e) – Lógica de clique em uma carta.
reiniciarJogo() – Reinicia o jogo, restaurando pontuação e tabuleiro.

Mecânicas:
Embaralhamento: Implementado com o algoritmo de Fisher-Yates.
Pontuação: Reduzida a cada movimento incorreto.
Movimentos e Correspondências: Contados para exibir estatísticas.

Lógica de Finalização:
Verifica vitória quando todos os pares são encontrados.
Alerta derrota quando a pontuação chega a zero.

CSS
Estilização do tabuleiro, cartas, e controles.

Contato 
📧 cristianmarfer14@gmail.com.
Destaque visual para cartas viradas e cartas correspondentes.
