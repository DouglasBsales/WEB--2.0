let valor1 = 546;
let valor2 = 7624;
let valor3 = 76234654;
let aux = valor1;

if(valor2 > valor1){
    aux = valor2;
    valor2 = valor1;
    valor1 = aux;
}
if(valor3 > valor1){
    aux = valor3;
    valor3 = valor1
    valor1 = aux;
}
if(valor3 > valor2){
    aux = valor3;
    valor3 = valor2;
    valor2 = aux;
}

console.log(valor1, valor2, valor3);