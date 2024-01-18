/* esse código le os dois valores e passa duas condicoes
 Se os numeros forem iguais realiza a soma
 Caso não ele multiplica e adiciona a uma variável sobscrevendo
o valor dela em cada condição */

let a = 25;
let b = 50;
let c = null;

if (a === b) {
  c = a + b;
  console.log(
    `Os valores da variavel 1 que é: ${a}. foi somada com a variavel 2 que é: ${a}. E o resultado foi: ${c} `
  );
} else {
  c = a * b;
  console.log(
    `Como os valores são diferentes, eles foram multiplicados e o valor dessa operação foi: ${c}`
  );
}
