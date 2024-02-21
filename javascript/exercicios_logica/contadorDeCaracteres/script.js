function exibirCaracter() {
    let caracter = document.getElementById("entrada").value;
    document.getElementById("entrada").value = "";
    document.getElementById("exibirCaracter").value += caracter;
    caracter.trim();

    console.log(caracter);
  }

  function clearContent() {
    document.getElementById("exibirCaracter").value = "";
  }

  function clearContentEsc(event){
    if(event.key ==="Escape"){
        clearContent()
    }
  };

  document.addEventListener('keyup', clearContentEsc)