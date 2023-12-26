const pontos = [1,5,7,9,10,46,25];

let maiorPontos = 0;
let menorPontos = 999;
let mediaPontos = 0;

for(let i = 0 ; i < pontos.length; i++){
    if(pontos[i] > maiorPontos){
        maiorPontos = pontos[i];
    }
    if(pontos[i] < menorPontos){
        menorPontos = pontos[i];
    }

    mediaPontos = mediaPontos + pontos[i];
    mediaPontos = mediaPontos / pontos.length;
}

console.log("A quantidade maior de Pontos foi: " + maiorPontos);
console.log("A quantidade menor de Pontos foi: " + menorPontos);
console.log("A media de pontos foi : " + mediaPontos);