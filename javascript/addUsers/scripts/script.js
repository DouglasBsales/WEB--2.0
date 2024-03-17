function novoUsuario() {
  let divNovoUsuario = document.getElementById("divNovoUsuario"); // div
  let divUsuarioCadastrado = document.getElementById("divUsuarioCadastrado");
  divNovoUsuario.classList.remove("displayNone");
  divUsuarioCadastrado.classList.add("displayNone");

  let buttonUsuarioCadastrado = document.getElementById("usuarioCadastrado");
  let buttonCadastroUser = document.getElementById("newUser");
  buttonUsuarioCadastrado.classList.remove("corAzul");
  buttonCadastroUser.classList.add("corAzul");
}

function usuariosCadastrados() {
  let divNovoUsuario = document.getElementById("divNovoUsuario"); // div
  let divUsuarioCadastrado = document.getElementById("divUsuarioCadastrado");

  let buttonUsuarioCadastrado = document.getElementById("usuarioCadastrado");
  let buttonCadastroUser = document.getElementById("newUser");

  divNovoUsuario.classList.add("displayNone");
  divUsuarioCadastrado.classList.remove("displayNone");

  buttonUsuarioCadastrado.classList.add("corAzul");
  buttonCadastroUser.classList.remove("corAzul");
}

const listaUsuarios = []; // ARRAY OBTENDO OS VALORES DOS OBJETOS ADICIONADOS

function adicionarUsuario() {
  const campoNome = document.getElementById("campoNome").value;
  const campoNick = document.getElementById("campoNick").value;
  const campoEmail = document.getElementById("campoEmail").value;
  const divListaUsuarios = document.getElementById("listaUsuarios");

  let campoNomeDiv = document.getElementById("campoNomeDiv");
  let campoNickDiv = document.getElementById("campoNickDiv");
  let campoEmailDiv = document.getElementById("campoEmailDiv");

  if (campoNome === "" || campoNick === "" || campoEmail === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  const emailValido = verificarEmail();
  if (!emailValido) {
    return;
  }

  // Verifica se algum usuário já possui os mesmos valores
  const usuarioExistente = listaUsuarios.find(
    (usuario) =>
      usuario.Nome === campoNome ||
      usuario.Nickname === campoNick ||
      usuario.Email === campoEmail
  );

  if (!usuarioExistente) {
    const infoUsuarios = {
      Nome: campoNome,
      Nickname: campoNick,
      Email: campoEmail,
    };

    listaUsuarios.push(infoUsuarios);

    const usuarioElemento = document.createElement("div");

    usuarioElemento.style.paddingTop = "10px";
    usuarioElemento.innerHTML = `
      <p>Nome: ${infoUsuarios.Nome}</p>
      <p>Nickname: ${infoUsuarios.Nickname}</p>
      <p>Email: ${infoUsuarios.Email}</p>
      <button class= "cursor: pointer"onclick="removerUsuario('${infoUsuarios.Nome}', '${infoUsuarios.Nickname}', '${infoUsuarios.Email}')"> <strong> Remover Usuário <strong> </button>
      <br/>
      <br/>
      <hr/>
    `;

    divListaUsuarios.appendChild(usuarioElemento);
    alert("Usuário adicionado com sucesso");
    campoNomeDiv.classList.remove("bordaRed");
    campoNickDiv.classList.remove("bordaRed");
    campoEmailDiv.classList.remove("bordaRed");
  } else {
    alert("Já existe um usuário cadastrado com essas informações");
    campoNomeDiv.classList.add("bordaRed");
    campoNickDiv.classList.add("bordaRed");
    campoEmailDiv.classList.add("bordaRed");
  }

  clearContentCampos();
}

function verificarEmail() {
  const iconCheck = document.getElementById("iconCheck");
  const campoEmail = document.getElementById("campoEmail").value;
  let campoEmailDiv = document.getElementById("campoEmailDiv");

  const regexEmail = /\.com$/;
  if (regexEmail.test(campoEmail)) {
    iconCheck.classList.remove("displayNone");
    campoEmailDiv.classList.remove("bordaRed");
    return true;
  } else {
    alert("Escreva um email válido");
    iconCheck.classList.add("displayNone");
    campoEmailDiv.classList.add("bordaRed");
    return false;
  }
}

document.getElementById("campoEmail").addEventListener("blur", verificarEmail);

function removerUsuario(nome, nickname, email) {
  const index = listaUsuarios.findIndex(
    (usuario) =>
      usuario.Nome === nome &&
      usuario.Nickname === nickname &&
      usuario.Email === email
  );

  if (index !== -1) {
    listaUsuarios.splice(index, 1);
    alert("Usuário removido com sucesso");
    exibirUsuarios(); // Atualiza a lista de usuários após a remoção
  } else {
    alert("Usuário não encontrado");
  }
}

function exibirUsuarios() {
  const divListaUsuarios = document.getElementById("listaUsuarios");
  divListaUsuarios.innerHTML = ""; // Limpa a lista de usuários

  // Adiciona novamente os usuários à lista
  listaUsuarios.forEach((usuario) => {
    const usuarioElemento = document.createElement("div");

    usuarioElemento.innerHTML = `
    <p>Nome:${usuario.Nome}</p>
    <p>Nickname: ${usuario.Nickname}</p>
    <p>Email: ${usuario.Email}</p>
    <button class= "cursor: pointer"onclick="removerUsuario('${usuario.Nome}', '${usuario.Nickname}', '${usuario.Email}')"> <strong> Remover Usuário <strong> </button>
    <br/>
    <br/>
    <hr/>
    `;

    divListaUsuarios.appendChild(usuarioElemento);
  });
}

function clearContentCampos() {
  const iconCheck = document.getElementById("iconCheck");
  document.getElementById("campoNome").value = "";
  document.getElementById("campoNick").value = "";
  document.getElementById("campoEmail").value = "";
  iconCheck.classList.add("displayNone");
}
