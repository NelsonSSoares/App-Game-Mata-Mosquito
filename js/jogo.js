var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;

var nivel = window.location.search ;          // search rerornaa apena a query string da url, a direita do ?

nivel = nivel.replace('?',''); // substitui a string da direita pelo da esquerda

if(nivel === 'normal'){
    criaMosquitoTempo = 1500;
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000;
}else if(nivel === 'punk'){
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight;// revela tamanho da area visivel, o tamanho da janela
     largura = window.innerWidth;
     console.log(largura, altura); // 876 x 400
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function() {
    tempo--

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo //seta valor entre as tags HTML exemplo: <div> entre as tag aqui </div>
    }
}, 1000);

function posicaoRandomica(){

    // remover mosquito anterior caso exista
    //o if testa se o elemento ja existe, caso exista, o returno sera 'true'
    if(document.getElementById('mosquito')){ 
        // SE FOR TRUE REMOVE O ELEMENTO, SE NAO SERA CRIADO FORA DESTA CONDIÇÃO
       document.getElementById('mosquito').remove();
       //contatena e incrementa a varavel para que possa acessar os ID's v1 v2 v3
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = "images/coracao_vazio.png"
            vidas++;
        }
       
    }
    

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

    //Aplica uma class criada na folha de estilo e selecinadaa pela funcao
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    // é possivel executaar 2 funções em um só chamada

    // define a posição lateral a qual o mosquito vai "spawnar"
    mosquito.style.left = posicaoX + 'px';

    // define a posição vertical a qual o mosquito vai "spawnar"
    mosquito.style.top = posicaoY + 'px';

    //define o elemento como absoluto para que a redimensionamento funcone
    mosquito.style.position = 'absolute';

    // aplica um ID na varivel
    mosquito.id = 'mosquito'

    mosquito.onclick = function() {
       this.remove(); //o this indica ao metodo remove que é este mesmo elemento html que queremos indicar
    } 

    // Adiciona um "filho dentro do body"
    document.body.appendChild(mosquito);



}

function tamanhoAleatorio(){

    //Math floor, arredenda valor para baixo
    var classe = Math.floor(Math.random() * 3);
    //os tamanhos agora sao geradas randomicaamente
    
    switch(classe){
        case 0:
            return 'mosquito1';
// usando o return nao é necessario usar o break
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2);

    switch(lado) {
        case 0:
            return 'ladoA';
        
        case 1:
            return 'ladoB';
    }
}