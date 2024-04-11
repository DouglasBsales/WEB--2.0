let contaUser = document.getElementById("conta");
let agenciaUser = document.getElementById("agencia");
let valorUserAdd = document.getElementById("valor");

function Conta(conta, agencia, saldo) {
  this.conta = conta;
  this.agencia = agencia;
  this.saldo = saldo;

  return this.verSaldo();
}

Conta.prototype.verSaldo = function () {

  const saldoNumerico = parseFloat(this.saldo)

  console.log(
    `Ag: ${this.agencia}, Conta: ${this.conta}, Saldo: R$${saldoNumerico.toFixed(2)}`
  );
};

Conta.prototype.adicionarSaldo = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const arraysConta = []
arraysConta["ContasUsuarios"] = []

function addConta() {
  new Conta(
    contaUser.value,
    agenciaUser.value,
    valorUserAdd.value
  );
  arraysConta["ContasUsuarios"].push(conta)
  console.log(arraysConta["ContasUsuarios"]);
}

function CC(conta, agencia, saldo, limite) {
  Conta.call(this, conta, agencia, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);

CC.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const conta1CC = new CC(123, 456, 10, 100);
