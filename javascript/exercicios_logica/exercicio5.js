/*
Esse algoritmo ira receber o valor do salário mínimo e o valor do salario 
do usuario, calcular quantos salarios mínimos ele recebe e imprimir na tela 
*/

let salarioMinimo = 1293.20
let salario = 9450.58

let quantidadeSalarios = salario / salarioMinimo;
let salarioTotal = quantidadeSalarios.toFixed(1);


console.log(`O usuario recebe ${salarioTotal} salários mínimos referente ao seu salario de: ${salario}`)