function onOff() {
  let button = document.getElementById("button");
  if (button.classList.contains("estado1Button")) {
    button.classList.remove("estado1Button");
    button.classList.add("estado2Button");
  } else {
    button.classList.remove("estado2Button");
    button.classList.add("estado1Button");
  }

  let content = document.getElementById("iconButton");
  if (content.classList.contains("estado1")) {
    content.classList.add("estado2");
    content.classList.remove("estado1");
  } else {
    content.classList.remove("estado2");
    content.classList.add("estado1");
  }

  button.style.transition = "background-color 0.4s ease";
}

document.addEventListener("click", onOff);
