function selecionarFruta() {
  let fruta = document.getElementById("fruta").value;
  let quantidade = parseInt(document.getElementById("quantidade").value);

  switch (fruta.toLowerCase ()) {
    case "maca":
    case "maça": {
      alert("Estamos sem essa fruta no momento, favor escolher outra");
      break;
    }

    case "melancia": {
      alert("Estamos sem essa fruta no momento, favor escolher outra");
      break;
    }

    case "morango":
    case "abacaxi":
    case "manga": {
      alert(
        `Quantidade: ${quantidade} de ${fruta} adicionada ao seu carrinho :)`
      );
      break;
    }
    default:
      alert("Escreva o nome de uma fruta!");
  }
}
