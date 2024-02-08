// functions callback

function exibirResultadoOperacao(operacao, a, b, cb){
    let resultado = operacao(a, b);
    cb(resultado);
}

function soma(a, b){
    return a + b;
}

function multipliacao(a, b){
    return a * b;
}

function showOp(resultado){
    console.log("O resultado foi de: " + resultado);
}

exibirResultadoOperacao(multipliacao, 2, 7, showOp);