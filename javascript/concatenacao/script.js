function notaAluno() {    
  let nome = prompt("Digite seu nome");
  let notaPrimeiraProva = parseFloat(prompt("Digite sua nota do semestre:"));
  let notaSegundaProva = parseFloat(prompt("Digite sua nota do semestre:"));
  let notaTerceiraProva = parseFloat(prompt("Digite sua nota do semestre:"));
  let redeDeEnsino = prompt("Em qual insituição você estuda?")

  if(isNaN(notaPrimeiraProva) || isNaN(notaSegundaProva)  || isNaN(notaTerceiraProva)){
    alert("Digite uma nota válida. Reinicie o programa");
    return;
  }
  
  let somaNotas = (notaPrimeiraProva + notaSegundaProva  + notaTerceiraProva ) / 3;
  let resultadoNotaSemestre = somaNotas.toFixed(1);

  if (resultadoNotaSemestre <= 5.9) {
    alert("Candidato: " + nome + ". Da rede de ensino: " + redeDeEnsino + ". Sua nota foi: " + resultadoNotaSemestre + " e você foi reprovado. Estude mais!");
  } else {
    alert("Candidato: " + nome + ". Da rede de ensino: " + redeDeEnsino +" Sua nota foi: " + resultadoNotaSemestre + " e você foi aprovado. Muito bem!")
    ;
  }
};

//Esse código recebe o nome + notas + instituição do usuário, soma todas as notas e entrega a média.
