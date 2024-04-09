const pessoa = {
  nome: "rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
// me retorna as chaves / atributos do objeto
console.log(Object.values(pessoa));
// me retorna os valores dos atributos
console.log(Object.entries(pessoa));
// me retorna um array com chave e valor
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
}); // podemos usar os métodos do array

const carro = {
  nome: "ferrari",
  motor: "400cv",
  proprietário: "douglas",
};

Object.freeze(carro);
carro.proprietário = "joão";
console.log(carro.proprietário);

const pessoa3 = {
  nome: "douglas",
};
const atr = {
  sobrenome: "sales",
};
const atr1 = {
  idade: 25,
};

Object.assign(pessoa3, atr, atr1);
// conseguimos praticar herança no objeto literal
// esse método adiciona os valores depois do 1 parametro
// ao objeto passado no 1° parametro
console.log(pessoa3);
