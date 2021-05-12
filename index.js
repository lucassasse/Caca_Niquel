var numeros = [0, 0, 0]
var dinheiro = 250
var fichas = 100

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

//Arrumar as CSS + Transformar em responsivo
//Substituir os números por imagens