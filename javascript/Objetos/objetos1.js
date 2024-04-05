// diferentes formas de instanciar novos objetos

const produto = new Object();
produto.nome = "notebook";
produto.preco = 1999;
produto.status = "Disponível";

class products {
  constructor(nome, preco, status) {
    this.nome = nome;
    this.preco = preco;
    this.status = status;
  }
}

const arrayProducts = [
  {
    eletronicos: [],
  },
];

function addNewProduct(nome, preco, status) {
  const newProduct = new products(nome, preco, status);
  arrayProducts[0].eletronicos.push(newProduct);
}

addNewProduct("Pc GAMER", 1200, "disponível");
addNewProduct("Pc NORMAL", 800, "disponível");
addNewProduct("Console XBOX 360", 500, "disponível");
console.log(arrayProducts);
