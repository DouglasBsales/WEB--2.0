function leftDiv() {
    let div = document.getElementById("div");
    div.style.opacity = "1";
    div.style.transition = "opacity 2.4s ease";
    div.style.transform = "translateY(-50px)";
  }

document.addEventListener("scrollend", leftDiv);
