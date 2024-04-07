const sequencia = {
  _valor: 1, // o uso do undelrine indica para os demais desenvolvedores que a variável pretende ser usada privadamente
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

const pessoa = {
    _nome: "douglas", 

    get nome(){
        return this._nome
    }, 

    set nome(nomeUser){
        return this._nome = nomeUser
    }
}

console.log(pessoa.nome)
pessoa.nome = "rayelle"
console.log(pessoa.nome)


class usuario{
    #primeiroNome = "douglas";
    #segundoNome = "sales"
  
    get nomeCompleto(){
        return `${this.#primeiroNome} ${this.#segundoNome}`
    }

    set nomeCompleto(item){
        [this.#primeiroNome, this.#segundoNome] = item.split(" ")
    }
}

const p1 = new usuario(25, "1.83")
console.log(p1.nomeCompleto)
p1.nomeCompleto = "Rayelle santos"
console.log(p1.nomeCompleto)
