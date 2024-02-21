function acao1() {
  console.log("O objeto está com foco");
}

function acao2() {
  alert("O objeto perdeu o foco");
}

let input = document.getElementById("input");
input.addEventListener("focus", acao1());
input.addEventListener("blur", acao2());
