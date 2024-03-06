const objetos = ["Cadeira", "Impressora", "Garfo"];
const numeros = [23];

function adicionarObjetos() {
  let valor = document.getElementById("campo").value;

  if (valor.length === 0) {
    alert("exiba um valor válido");
    return;
  }

  if (objetos.indexOf(valor) == -1) {
    objetos.push(valor);
    alert("O objeto foi adicionado ao array de objetos");
    document.getElementById("campo").value = "";
    console.log(objetos);
  } else {
    alert("O Objeto ja foi adicionado");
    document.getElementById("campo").value = "";
  }
}

function ordenarObjetos() {
  let resultado = objetos.sort();
  console.log(resultado);
}

function adicionarNumeros() {
  let valor = document.getElementById("campoNumber").value;

  if (valor.length === 0) {
    alert("insira um número válido");
    return;
  }

  if (numeros.indexOf(valor) == -1) {
    alert("Objeto adicionado");
    numeros.push(valor);
    console.log(numeros);
    document.getElementById("campoNumber").value = "";
  } else {
    alert("O número ja foi adicionado");
    document.getElementById("campoNumber").value = "";
  }
}

function ordenarNumber() {
  let resultado = numeros.sort((a, b) => {
    return a - b;
  });

  console.log(resultado);
}
