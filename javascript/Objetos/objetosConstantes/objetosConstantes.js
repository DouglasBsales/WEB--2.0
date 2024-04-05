// a minha const aponta para um endereço de memporia = ex: 123 => de fato o objeto criado
const pessoa = { nome: "joão" };
pessoa.nome = "pedro";
console.log(pessoa);

/*pessoa = {nome:"douglas"}*/

Object.freeze(pessoa);
pessoa.nome = "douglas";
pessoa.age = 25;
console.log(pessoa.age);
console.log(pessoa.nome);
console.log(pessoa);

let nomeUser = "douglas";
let idadeUser = 38;

const pessoa1 = {
  nome: nomeUser,
  age: idadeUser,
  adress: "rua 112",
  CEP: "53070200",
  Sexo: "Masculino",
};

console.log(pessoa1);
delete pessoa1.Sexo
console.log(pessoa1)
