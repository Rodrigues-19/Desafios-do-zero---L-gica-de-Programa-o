function sortear() {

    var quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    var doNumero = parseInt(document.getElementById('de').value);
    var ateNumero = parseInt(document.getElementById('ate').value); 

    if (doNumero >= ateNumero) {
        alert ('Você está tentando inverter a ordem do sorteador. O campo "Do Número" deve ser inferior ao campo "Até o número"');
        return; // ao chamar return sem nenhum argumento, o computador entende que não é necessário eecutar mais o cóigo, até que o usuário insira os valores corretamente. e Assim não executa nada até que seja corrigido.
    }
    if (quantidadeDeNumeros > (ateNumero - doNumero + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do Número" até o campo "Até o número"');
        return;
    }
    var sorteados = [];
    var numero;

    for (var i = 0; i < quantidadeDeNumeros; i++) {
        numero = gerarNumeroAleatorio (doNumero, ateNumero);
        while (sorteados.includes(numero)) {        //.includes verifica na array sorteados se o argumento "numero" ja foi sorteado, e retorna um booleano (verdadeiro ou falso).
            numero = gerarNumeroAleatorio(doNumero, ateNumero);
        
        }
        sorteados.push(numero);

}

var results = document.getElementById ('resultado');
results.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>` // .innerHTML srve pra você escrever na tela algo. Como essa frase ja existia no index.html, copiamos o código do HTML e colamos entre crases para podermos imprimir oque queremos.
alterarStatusBotao();
}

function gerarNumeroAleatorio (min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;

}

function alterarStatusBotao() {
    var botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao'); 
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
} 

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao();
}


