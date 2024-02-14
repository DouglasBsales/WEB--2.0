function calculo(num1, operacao, num2) {

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let resultado = 0;

  if (operacao == "soma") {
    resultado = num1 + num2;
  }
  if (operacao == "subtracao") {
    resultado = num1 - num2;
  }

  return console.log(resultado);
}

calculo(1, "soma", 7);
