//Implementar sistema de trofeus - 100 - 500 - 1k - 5k - 10k 100k

var numeros = [0, 0, 0]
var dinheiro = 250
var fichas = 10

var lista = document.querySelector('#ul li')
var imagens = [
'imagens/imgBar.png',
'imagens/imgCereja.png',
'imagens/imgSete.png',
]

atualizarFichas(0)
atualizarDinheiro(0)

function SortearNumeros(){
    var numeroSorteado
    for (var i = 0; i < 3; i++){
        numeroSorteado = parseInt(Math.random() * 3)
        numeros[i] = numeroSorteado
    }
    verificacaoResultado()
}

function verificacaoResultado(){
    var resultado
    if (numeros[0] == numeros[1] && numeros[0] == numeros[2]){
        alert("Parabéns, você ganhou!")
        atualizarFichas(10)
    }
    return resultado
}

/**************************************

function imprimirImg(){
  lista.innerHTML = ''
  
  for (var i = 0; i < numeros.length; i++){
    var resultado = imagens[numeros[i]]
    `<img src="${resultado}"></img>`
  }
}

**************************************/

function cliqueBotao(){
    if (fichas > 0) {
        atualizarFichas(-1)
        SortearNumeros()
        imprimirImg()
    } else {
        alert("Suas Fichas acabaram.\nCompre mais para poder continuar jogando!")
    }
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