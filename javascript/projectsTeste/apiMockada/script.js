let divComments = document.getElementById("paiComments");
let divCarregando = document.getElementById("carregando");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputComment = document.getElementById("comment");
let divForm = document.getElementById("form");

async function getComments() {
  const response = await fetch("http://localhost:3000/comments", {
    method: "GET",
  });
  const data = await response.json();

  divCarregando.classList.add("hidden");

  data.forEach((elemento) => {
    createComments(elemento);
  });

  console.log(data);
}

async function sendComment() {
  let comment = {
    body: inputComment.value,
    email: inputEmail.value,
    name: inputName.value,
  };

  comment = JSON.stringify(comment);

  await fetch("http://localhost:3000/comments", {
    method: "POST",
    body: comment,
    headers: { "content-type": "application/json" },
  });
}

async function deleteComments(id) {
  await fetch(`http://localhost:3000/comments/${id}`, {
    method: "DELETE",
  });
}

async function createComments(elemento) {
  const comments = document.createElement("div");
  comments.innerHTML = `
      <div class="flex flex-col pb-[20px]">
      <div class="flex gap-[10px] items-center">
      <div class="">
      <img src='${elemento.photo_perfil}' class="w-[50px] h-[50px] rounded-full" alt="PhotoPerfil"> 
      </div>
        <div><p class="text-2xl font-semibold">${elemento.name}</p>
        <p class="text-lg font-semibold">${elemento.email}</p></div>
      </div>
      <div class="w-[500px] flex justify-end">
      <button onclick="deleteComments('${elemento.id}')">
      <i class="bi bi-trash text-[#919191] text-lg cursor-pointer"></i>
      </button>
      </div>
      <div class="w-[400px]">
      <p class="pt-[10px]" >${elemento.body}</p>
      </div>
      </div>
    `;
  divComments.appendChild(comments);
}

getComments();



