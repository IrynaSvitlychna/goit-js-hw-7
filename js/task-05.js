function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");

const btn = document.querySelector(".change-color");

const spanColor =document.querySelector(".color");

btn.addEventListener("click", () => {
  let colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl;
spanColor.textContent = `${colorEl}`;
})


