function verificarCampo() {
  let input = document.getElementById("campo");
  let senhaForte = document.getElementById("senhaForte");
  let senhaFraca = document.getElementById("senhaFraca");

  if (input.value.length >= 3) {
    senhaForte.style.color = "green";
    senhaForte.style.display = "block";
    senhaFraca.style.display = "none";
  } else {
    senhaFraca.style.color = "red";
    senhaFraca.style.display = "block";
    senhaForte.style.display = "none";
  }

  if (input.value.length == 0) {
    senhaFraca.style.display = "none";
    senhaForte.style.display = "none";
  }
}

document.addEventListener("keyup", verificarCampo);
