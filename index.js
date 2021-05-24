//Implementar sistema de trofeus - 100 - 500 - 1k - 5k - 10k 100k

var numeros = [0, 0, 0]
var dinheiro = 250
var fichas = 10

atualizarFichas(0)
atualizarDinheiro(0)

function SortearNumeros(){
    var numeroSorteado
    for (i = 0; i < 3; i++){
        numeroSorteado = parseInt(Math.random() * 3)
        numeros[i] = numeroSorteado
    }
}

function verificacaoResultado(){
    var resultado
    if (numeros[0] == numeros[1] && numeros[0] == numeros[2]){
        resultado = "Parabéns, você ganhou!"
        atualizarFichas(10)
    } else {
        resultado = "Infelizmente você perdeu!"
    }
    return resultado
}

function apresentarTexto(resultado){
    var texto = document.getElementById("resultado")
    texto.innerHTML = resultado
    var textoNumeros = document.getElementById("numeros-sorteados")
    textoNumeros.innerHTML = numeros[0] + " | " + numeros[1] + " | " + numeros[2]
}

function verificacaoFichas(){
    if (fichas > 0) {
        cliqueBotao()
    } else {
        apresentarTexto("Suas Fichas acabaram. <br> Compre mais para poder continuar jogando!")
    }
}

function cliqueBotao(){
    SortearNumeros()
    var valor = verificacaoResultado()
    apresentarTexto(valor)
    atualizarFichas(-1)
}

function atualizarFichas(valor){
    fichas += valor
    var elemento = document.getElementById("fichas")
    elemento.innerHTML = "Quantidade de Fichas: " + fichas
}

function atualizarDinheiro(valor){
    dinheiro += valor
    var elemento = document.getElementById("saldo")
    elemento.innerHTML = "Seu saldo é de R$: " + dinheiro + ",00"
}

function ComprarFichas(dinheiroLoja, fichasLoja){
    if (dinheiro >= dinheiroLoja) {
        atualizarFichas(fichasLoja)
        atualizarDinheiro(-dinheiroLoja)
    } else (
        alert("Saldo insuficiente")
    )
}

/*
JAVASCRIPT
var numeros = [0, 0, 0]
var lista = document.querySelector('#ul li')
var imagem = ['https://st.depositphotos.com/1780879/3816/i/600/depositphotos_38166573-stock-photo-trees-with-sunbeams.jpg', 'https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzfv4LleAcIFcICa2bOoIiWIJS3cinc3cNA&usqp=CAU']

function gerarNumero(){
  //lista.innerHTML = ''
  for (var i = 0; i < numeros.length; i++){
    numeros[i] = Math.floor(Math.random() * 3)
  }
  imprimirImg()
}

function imprimirImg(){
  lista.innerHTML = ''
  
  for (var i = 0; i < numeros.length; i++){
    var resultado = imagem[numeros[i]]
    var template = `<img src="${resultado}">`
    var li = document.createElement('li')
    li.innerHTML = template
    lista.append(li)
  }
}

----------------------------------
CSS

img{
  max-height: 100px;
}

li{
  display: flex;
  margin: 5px;
}

----------------------------------
HTML

<button id='jogar' onclick='gerarNumero()'>Jogar</button>
<div>
  <ul id='ul'>
    <li id='li' style='list-style:none'></li> // Talvez não precisa deste linha - testar
  </ul>
</div>
*/