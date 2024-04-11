const pokemon = {
  atributos(tipo) {
    if (tipo === "fogo") {
      this.attack = 4;
      this.hp = 3;
      this.deffense = 3;
      this.specialAttack = 4;
      this.specialDeffense = 3;
      this.speed = 4;
    } else if (tipo === "agua") {
      this.attack = 3;
      this.hp = 3;
      this.deffense = 4;
      this.specialAttack = 3;
      this.specialDeffense = 4;
      this.speed = 3;
    } else if (tipo === "planta") {
      this.attack = 3;
      this.hp = 3;
      this.deffense = 3;
      this.specialAttack = 4;
      this.specialDeffense = 4;
      this.speed = 3;
    }

    return `Attack: ${this.attack}, deffense: ${this.deffense}, EspecialAttack: ${this.specialAttack}, SpecialDeffense: ${this.specialDeffense}, HP: ${this.hp}, Speed: ${this.speed}`;
  },

  fraquezas(tipo) {
    if (tipo === "fogo") {
      this.water = "Water|Nível: 4|";
      this.ground = "Ground|Nível: 1.5|";
      this.rock = "Rock|Nível: 4|";

      return `${this.water}, ${this.ground}, ${this.rock}`;
    } else if (tipo === "agua") {
      this.grass = "grass|Nível: 4|";
      this.eletric = "Eletric|Nível: 4|";

      return `${this.grass}, ${this.eletric}`;
    } else if (tipo === "planta") {
      this.fire = "Fire|Nível: 4|";
      this.ice = "Ice|Nível: 4|";
      this.flying = "Flying|Nível: 1.5|";
      this.psychic = "Psychic|Nível: 5|";

      return `${this.fire}, ${this.ice}, ${this.flying}, ${this.psychic}`;
    }

    return `${this.tipo}`;
  },

  infosPokemon(tipo) {
    const atributos = this.atributos(tipo);
    const fraquezas = this.fraquezas(tipo);
    return `Atributos: ${atributos}, Fraquezas: ${fraquezas}`;
  },
};

const pokeCharmander = {
  nome: "charmander",
  tipo: "fogo",

  infosPokemon() {
    return `Nome: ${this.nome}, ${super.infosPokemon(this.tipo)}`;
  },
};

Object.setPrototypeOf(pokeCharmander, pokemon);
console.log(pokeCharmander.infosPokemon())
console.log(pokeCharmander)


const pokeSquartel = {
  nome: "Squartel",
  tipo: "agua",

  infosPokemon() {
    return `Nome: ${this.nome}, ${super.infosPokemon(this.tipo)}`;
  },
};

Object.setPrototypeOf(pokeSquartel, pokemon);
console.log(pokeSquartel.infosPokemon());

const pokeBubassauro = {
  nome: "Bubassauro",
  tipo: "planta",

  infosPokemon() {
    return `Nome: ${this.nome}, ${super.infosPokemon(this.tipo)}`;
  },
};

Object.setPrototypeOf(pokeBubassauro, pokemon)
console.log(pokeBubassauro.infosPokemon())
