// cadeia de protoipo (prototype chain)

const avo = {
  attr1: "A",
};

const pai = {
  __proto__: avo,
  attr2: "B",
};

const filho = {
  __proto__: pai,
  attr3: "C",
};

console.log(pai.__proto__);
console.log(filho.__proto__);
console.log(`Atributo prototipo avo: ${filho.attr1}`);
console.log(`Atributo prorotipo pai: ${filho.attr2}`);
console.log(`Atributo derivado do meu objeto em si: ${filho.attr3}`);

const atributos = {
  tipo: "planta",
  attack: 5,
  deffense: 3,
  attackEspecial: 6,
  deffenseEspecial: 4,
};

const pokemonPlanta = {
  nome: "Bubassauro",
  __proto__: atributos,
};

console.log(pokemonPlanta.__proto__);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },

  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};

const ferrari = {
  modelo: "ferrari",
  velMax: 324, // shaowding quando um atributo sobescreve o outro
};

const volvo = {
  modelo: "v40",
  status() {
    return `${this.modelo}, ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

volvo.acelerarMais(100)
console.log(volvo.status())
