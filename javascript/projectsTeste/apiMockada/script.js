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
  console.log(data);

  divCarregando.classList.add("hidden");

  data.forEach((elemento) => {
    createComments(elemento);
  });
}

async function sendComment() {
  let comment = {
    body: inputComment.value,
    email: inputEmail.value,
    name: inputName.value,
  };

  comment = JSON.stringify(comment);

  const response = await fetch("http://localhost:3000/comments", {
    method: "POST",
    body: comment,
    headers: { "content-type": "application/json" },
  });

  const data = response.json();

  console.log(data);
}

divForm.addEventListener('submit', sendComment)

async function createComments(elemento) {
  const comments = document.createElement("div");
  comments.innerHTML = `
    <div class="w-[400px] pb-[20px]">
    <div><p class="text-2xl font-semibold">${elemento.name}</p>
    <p class="text-lg font-semibold">${elemento.email}</p>
    <p class="pt-[10px]" >${elemento.body}</p>
    </div>
    </div>
    `;
  divComments.appendChild(comments);
}

getComments();
