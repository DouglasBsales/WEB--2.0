function notaAluno() {
  let nome = prompt("Digite seu nome:");
  let nota = prompt("Digite sua nota do semestre:");
  let redeDeEnsino = prompt("Em qual insituição você estuda?")

  if (nota <= 5.99) {
    alert("Candidato: "+nome + ". Da rede de ensino: " + redeDeEnsino + ". Sua nota foi: " + nota + ". E você foi reprovado. Estude mais!");
  } else {
    alert("Candidato: "+nome + ". Da rede de ensino: " + redeDeEnsino +" Sua nota foi: " + nota + ". E você foi aprovado. Muito bem!")
    ;
  }
}
