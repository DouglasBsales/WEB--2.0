function calcularNota(){
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);
    
    let somaTotal = (nota1 + nota2 + nota3 + nota4) /4;
    let resultado = somaTotal.toFixed(1);

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        alert("escreva notas válidas!")
        return;
    }

    if(resultado >= 1000.1){
        alert("Nota inválida, adiciona novas notas")
    }
    else{
        alert(`A sua média do Enem foi: ${resultado}.`);
    }
};