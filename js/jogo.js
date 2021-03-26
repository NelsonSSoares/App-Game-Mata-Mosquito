var altura = 0;
var largura = 0;




function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight;// revela tamanho da area visivel, o tamanho da janela
     largura = window.innerWidth;
     console.log(largura, altura); // 876 x 400
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

    //Math floor, arredenda valor para baixo // o -90 corrige o padding da imaagem que sai da tela e abre o scroll de rolagem
    var posicaoX = Math.floor(Math.random()* largura) -90; // gera posicao randomica na posição X
    var posicaoY = Math.floor(Math.random()* altura) - 90; // gera posicao randomica na posição Y
    //as posições agora sao geradas rndomicaamente dentro das posições declaradas nas variaveis de altura e largura
    console.log(posicaoX, posicaoY);

    //caso a posição seja menor que zero
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    //criar o elemento HTML

    var mosquito = document.createElement('img'); // cria elemento HTML

    // atribui o caminho da imagem na variavel
    mosquito.src = 'images/mosca.png';

    //Aplica uma class criada na folha de estilo
    mosquito.className = 'mosquito1';

    // define a posição lateral a qual o mosquito vai "spawnar"
    mosquito.style.left = posicaoX + 'px';

    // define a posição vertical a qual o mosquito vai "spawnar"
    mosquito.style.top = posicaoY + 'px';

    //define o elemento como absoluto para que a redimensionamento funcone
    mosquito.style.position = 'absolute';

    // Adiciona um "filho dentro do body"
    document.body.appendChild(mosquito);

}