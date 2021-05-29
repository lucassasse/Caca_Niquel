//Implementar sistema de trofeus - 100 - 500 - 1k - 5k - 10k 100k

var numeros = [0, 0, 0]
var dinheiro = 250
var fichas = 10

var lista = document.querySelector('#ul li')
var imagem = ['<li class="imgPree"> <img src="imagens/imgBar.png" alt=""></li>',
'<li class="imgPre"> <img src="imagens/imgCereja.png" alt=""></li>',
'<li class="imgPre"> <img src="imagens/imgSete.png" alt=""></li>']

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

function imprimirImg(){
  lista.innerHTML = ''
  
  for (var i = 0; i < numeros.length; i++){
    var resultado = imagem[numeros[i]]
    var template = `${resultado}`
    var li = document.createElement('li')
    li.innerHTML = template
    lista.append(li)
  }
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
    imprimirImg()
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