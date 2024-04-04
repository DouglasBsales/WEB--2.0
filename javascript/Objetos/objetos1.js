// diferentes formas de instanciar novos objetos

const produto = new Object();
produto.nome = "notebook";
produto.preco = 1999;
produto.status = "Disponível";

const infoProducts = [
  {
    products: {
      computador: {
        preco: 2500,
        status: "Disponível",
        unidades: 25,
      },
      notebook: {
        preco: 4500,
        status: "Disponível",
        unidades: 10,
      },
      Consoles: {
        playstation: {
          2: {
            preco: 400,
            status: "disponível",
            unidades: "32",
          },
          3: {
            preco: 700,
            status: "disponível",
            unidades: "4",
          },
        },
      },
    },
  },
];

console.log(infoProducts);
