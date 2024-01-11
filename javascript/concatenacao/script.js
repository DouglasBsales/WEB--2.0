function notaAluno() {
  let nome = prompt("Digite seu nome:");
  let notaPrimeiraProva= parseFloat(prompt("Digite sua nota da 1 prova"));
  let notaSegundaProva= parseFloat(prompt("Digite sua nota da 2 prova"));
  let notaTerceiraProva= parseFloat(prompt("Digite sua nota da 3 prova:"));
  let redeDeEnsino = prompt("Em qual insituição você estuda?")

  if(isNaN(notaPrimeiraProva) || isNaN(notaSegundaProva) || isNaN(notaTerceiraProva)){
    alert("Digite uma nota válida. Reinicie o programa.");
    return;
  }

  let somaNotas = (notaPrimeiraProva + notaSegundaProva + notaTerceiraProva) / 3;
  let resultadoSemestre = somaNotas.toFixed(2);

  if (resultadoSemestre <= 5.99) {
    alert("Candidato: "+ nome + ". Da rede de ensino: " + redeDeEnsino + ". Sua nota foi: " + resultadoSemestre + ". E você foi reprovado. Estude mais!");
  } else {
    alert(`Candidato: ${nome}. Da rede de ensino: ${redeDeEnsino} Sua nota foi: ${resultadoSemestre}. E você foi aprovado. Muito bem!`)
    ;
  }
}

