function soma() {
  let resultado = 0;
  for (i = 0; i < arguments.length; i++) {
    resultado += arguments[i];
  }

  return console.log(resultado);
}

soma(2, 2, 2);
