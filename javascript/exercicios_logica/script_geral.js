function numeroPrimo(number) {
    let ehPrimo = true;
  
    if (number <= 1) {
      ehPrimo = false;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          ehPrimo = false;
          break;
        }
      }
    }
  
    if (ehPrimo) {
      console.log("Esse número é primo");
    } else {
      console.log("Esse número não é primo");
    }
  }
  
  numeroPrimo(6);
