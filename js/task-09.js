function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const backgroundEl = document.querySelector('body');
const painterEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

painterEl.addEventListener('click', onChangeColor)

function onChangeColor() {
  backgroundEl.style.background = getRandomHexColor();
  colorEl.textContent = getRandomHexColor()
}
