const body = document.querySelector("body");
const darkLightButton = document.querySelector(".dark-light");
const logo = document.querySelector("#logotype")

const increase = document.querySelector(".text-increase");
const decrease = document.querySelector(".text-decrease");
const paragraph = document.getElementsByClassName("content");

darkLightButton.addEventListener("click", darklight);

increase.addEventListener("click", increaseTextSize);
decrease.addEventListener("click", decreaseTextSize);

// ativar/desativar o modo notuno
function darklight() {
  body.classList.toggle("dark-mode");

  if (darkLightButton.getAttribute("title") === "Modo escuro") {
    darkLightButton.setAttribute("title", "Modo claro");
    logo.src = './images/logoD.svg'
  } else {
    darkLightButton.setAttribute("title", "Modo escuro");
    logo.src = './images/logoL.svg'

  }
}

// aumentar e diminnuir o texto
function increaseTextSize() {
  for (var i = 0; i < paragraph.length; i++) {
    let tamanhoAtual = parseInt(window.getComputedStyle(paragraph[i]).fontSize);
    if (tamanhoAtual <= 21) {
      paragraph[i].style.fontSize = tamanhoAtual + 1 + "px";
    }
  }
}

function decreaseTextSize() {
  for (var i = 0; i < paragraph.length; i++) {
    paragraph[i].style.fontSize = "initial";
  }
}
