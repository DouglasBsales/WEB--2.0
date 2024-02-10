//funcoes para exibicao dos numbers na tela da calculadora

function exibir7() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number7 = "7";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number7;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number7;
    }
}

function exibir8() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number8 = "8";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number8;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number8;
    }
}

function exibir9() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number9 = "9";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number9;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number9;
    }
}

function exibir4() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number4 = "4";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number4;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number4;
    }
}

function exibir5() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number5 = "5";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number5;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number5;
    }
}

function exibir6() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number6 = "6";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = conteudoAtual + number6;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number6;
    }
}

function exibir1() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number1 = "1";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number1;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number1;
    }
}

function exibir2() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number2 = "2";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number2;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number2;
    }
}

function exibir3() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number3 = "3";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number3;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number3;
    }
}

function exibir0() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let number0 = "0";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = number0;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += number0;
    }
}

function exibirVirgula() {
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");
  let exibirNumbers = document.getElementById("exibirNumbers");
  let conteudoAtual = exibirNumbers.textContent;
  let virgula = ",";

  if (exibirNumbers.textContent.length > 5) {
    exibirNumbers.style.fontSize = "54px";
  }
  if (exibirNumbers.textContent.length < 11)
    if (exibirNumbers.textContent === "0") {
      exibirNumbers.textContent = conteudoAtual + virgula;
      ac.style.display = "none";
      c.style.display = "block";
    } else {
      exibirNumbers.textContent += virgula;
    }
}

function clearContent() {
  let exibirNumbers = document.getElementById("exibirNumbers");
  let ac = document.getElementById("ac");
  let c = document.getElementById("c");

  exibirNumbers.textContent = "0";
  exibirNumbers.style.fontSize = "96px";

  ac.style.display = "block";
  c.style.display = "none";
}

// a cima funcoes de exibicao dos numbers na tela da calculadora

// a baixo funcoes dos buttons para realizar as operacoes aritméticas

function multipicacao() {
  let buttonMultplicacao = document.getElementById("x");
}

function divisao() {
  let buttonDivisao = document.getElementById("divisao");
}

function soma() {
  let buttonSoma = document.getElementById("soma");
}

function subtracao() {
  let exibirNumbers = document.getElementById("exibirNumbers");
  let sub = "-";
  let conteudoAtual = exibirNumbers.textContent;
  exibirNumbers.textContent = conteudoAtual + sub;
}

function exibirResultado() {
  let exibirNumbers = document.getElementById("exibirNumbers");
  let conteudoAtual = parseFloat(exibirNumbers.textContent);
  console.log(exibirNumbers.textContent)
  
  if(conteudoAtual.includes("-")){

  }
}
