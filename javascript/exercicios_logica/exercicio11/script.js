/*
funcao responsavel por criar condicoes nas formas de pagamento do usuario
e aplicar descontos conforme a forma escolhida.
*/
function exibirValor() {
  let produto = parseFloat(document.getElementById("produto").value);
  let formaDePagamento = document.getElementById("pagamento").value;
  let cartao = document.getElementById("cartao").value;

  let valorPixOuDinheiro = produto - (0.15 * produto);
  let aVistaCredito = produto - (0.10 * produto);
  let produtoDuasVezes = produto;
  let tresVezesCartao = produto + (0.10 * produto);

  if(isNaN(produto)){
    return alert("Insira um número válido.")
  }
  
  switch (formaDePagamento) {
    case "pix":
    case "dinheiro": {
      return alert(
        `O valor a ser pago é de: ${valorPixOuDinheiro.toFixed(2)} um desconto de 15%`);
    }

    case "cartao 1x":
    case "a vista cartao":
    case "cartao 1 vez": {
        return alert(`O valor a ser pago é de: ${aVistaCredito.toFixed(2)} um desconto de 10%`);
    }
  }

  if (formaDePagamento === "cartao") {
    switch (cartao) {
      case "2":
      case "2x":
      case "2 vezes": {
        return alert(`O valor a ser pago seria: ${produtoDuasVezes.toFixed(2)} com desconto de 10%`)
      }
       
      case "3":
      case "3 vezes":
      case "3x":
        {
         return alert(`O valor a ser pago é de: ${tresVezesCartao.toFixed(2)}  com juros de 10%`);
        }

      default:
        alert("Forma de pagamento inválida.");
    }
  }
};
