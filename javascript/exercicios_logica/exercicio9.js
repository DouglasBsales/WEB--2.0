/* 
Esse algoritimo calcula o imc do usuario e diz em quais condicoes 
ele se encontra
*/

let peso = 100;
let altura = 1.80;
let imc = peso / (altura * 2);
console.log(imc.toFixed(1));

if(imc <= 18.5){
    console.log("Abaixo do peso")
}
else if(imc <= 24.9){
    console.log("levemente a cima do peso")
}
else if(imc <= 34.9){
    console.log("Obesidade grau I ")
}
else if(imc <= 39.9){
    console.log("Obesidade grau II (severa)")
}
else{
    console.log("Obesidade grau III (mórbida)")
};