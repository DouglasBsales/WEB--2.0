const pessoas = [];

function addUsers() {
  let campoUsers = document.getElementById("campoUser").value;
  let listaUsuarios = document.getElementById("listaUsers");

  if (pessoas.indexOf(campoUsers) === -1) {
    pessoas.push(campoUsers);
    alert("O usuário foi adicionado");
  } else {
    alert("O usuário ja está contido na lista");
  }

  listaUsuarios.innerHTML = pessoas.sort();
  console.log(pessoas);
}

function removerUser() {
  let campoUsers = document.getElementById("campoUser").value;
  let listaUsuarios = document.getElementById("listaUsers");
  let index = pessoas.indexOf(campoUsers);
  console.log(index);

  if (index === -1) {
    alert("Não é possível remover um usuário que não existe na lista");
  } else {
    pessoas.splice(index, 1);
    listaUsuarios.innerHTML = pessoas;
    alert("O usuário foi removido");
  }
  console.log(pessoas);
}
