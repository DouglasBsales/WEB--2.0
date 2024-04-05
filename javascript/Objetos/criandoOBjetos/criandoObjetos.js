// criando no sentido literal
const obj1 = { nome: "douglas" };
console.log(obj1);

// object em JS

const obj2 = new Object();
obj2.nome = "Rayelle";
console.log(obj2);

// criando apartir de class

class obj {
  constructor(nome) {
    this.nome = nome;
  }
}

const obj3 = new obj("douglas");
console.log(obj3);

const pessoa1 = Object.create(null);
pessoa1.nome = "douglas";
console.log(pessoa1);

const pessoa21 = new Object()
pessoa21.nome = "rayelle"
console.log(pessoa21)

// uma funcao famosa que retorna object

const fromJSON = JSON.parse("{'info:' 'SOU UM JSON'}")
console.log(fromJSON.info)
