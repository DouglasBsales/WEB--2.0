/*
Esse algortimo recebe um valor inteiro e o imprime com reajuste de 5%;
*/

let salarioInt = 2450.82;
let reajuste = salarioInt * 0.05
let salarioComReajuste = salarioInt + reajuste;

console.log(`O reajuste foi de: ${reajuste.toFixed(2)} totalizando: ${salarioComReajuste.toFixed(2)} do seu salário.`);