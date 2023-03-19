const control = document.querySelector('#font-size-control');
const texto = document.querySelector('#text');

control.addEventListener("input",() => {
    texto.style.fontSize = `${control.value}px`;
});