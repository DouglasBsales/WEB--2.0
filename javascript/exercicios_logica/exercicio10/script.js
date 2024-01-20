function exibirMedia() {
  let usuario = document.getElementById("nome").value;

  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota1").value);
  let nota3 = parseFloat(document.getElementById("nota1").value);
  let nota4 = parseFloat(document.getElementById("nota1").value);

  let soma = (nota1 + nota2 + nota3 + nota4) / 4;
  let media = soma.toFixed(1);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) 
  return alert("Escreva notas válidas!");

  if (media >= 7) {
    alert(`${usuario} sua nota média foi de: ${media} e você está APROVADO`);
  } else {
    alert(`${usuario} sua nota média foi de: ${media} e você está REPROVADO`);
  }
}
