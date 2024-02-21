function calcularIdade() {
  let data1 = new Date(1999, 5, 8);
  let data2 = new Date();

  let difMilissegundosDatas = Math.abs(data1.getTime() - data2.getTime());
  let milissegundosDia = 24 * 60 * 60 * 1000;
  let milissegundosMeses = 30 * 24 * 60 * 60 * 1000;

  let difAnos = Math.abs(data1.getFullYear() - data2.getFullYear());
  let difMeses = difMilissegundosDatas / milissegundosMeses;
  let difDias = difMilissegundosDatas / milissegundosDia;

  return console.log(`Você viveu ${difAnos} anos. ${difMeses.toFixed()} meses. e ${difDias.toFixed()} dias de vida.`)
}

calcularIdade();
