const bodyElem = document.body
const btnElem = document.querySelector('.change-color')
const spanElem = document.querySelector('.color')
const bodyBack = bodyElem.style.backgroundColor

btnElem.addEventListener('click', onButtonClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick() {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  spanElem.textContent = color;
}