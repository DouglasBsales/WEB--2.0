function calcularImc() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let calculo = peso / (altura * altura);
  let imc = calculo.toFixed(1);
  
  if (imc <= 18.5) {
    alert(`${imc} | Abaixo do peso`);
    return;
  }
  else if(imc <=24.9){
    alert(`${imc} | Peso ideal (parabéns)`);
    return;
  }

  else if(imc <= 29.9){
    alert(`${imc} | Levemente acima do peso`)
  }

  else if(imc <=34.9){
    alert(`${imc} | Obesidade grau I`);
    return;
  }

  else if(imc <=39.9){
    alert(`${imc} | Obesidade grau II (severa)`);
    return;
  }

  else{
    alert(`${imc} Obesidade grau III (mórbida)`)
  }
};

