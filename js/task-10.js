function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("[type=number]");
const createButton = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const arrayDiv = document.querySelector("#boxes");

/* Usamos el ciclo for para iterar*/

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const widthHeightSize = 30 + i * 10 + "px";
    const divNew = document.createElement("div");
    divNew.style.width = widthHeightSize; 
    divNew.style.height = widthHeightSize; 
    divNew.style.backgroundColor = getRandomHexColor();
    divNew.style.marginTop = 5 + "px";
    arrayDiv.append(divNew);
  }
};


function create(el) {
  arrayDiv.innerHTML = "";
  createBoxes(inputRef.value);
}

function destroy(el) {
  arrayDiv.innerHTML = "";
  inputRef.value = 0;
}
createButton.addEventListener("click", create);
destroyBtn.addEventListener("click", destroy);
