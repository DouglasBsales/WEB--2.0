function multplicar(numero1, numero2) {
  let multplicacao = numero1 * numero2;

  if (numero1 < 0 || numero2 < 0) {
    return "Digite números positivos";
  }

  if (multplicacao >= 0) {
    return multplicacao;
  } 
}

console.log(multplicar(-8, -2));
console.log(multplicar(8, 2));
console.log(multplicar(8, -2));
