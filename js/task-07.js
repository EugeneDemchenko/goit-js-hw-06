const snake = document.querySelector('#font-size-control');
const item = document.querySelector('#text');

snake.addEventListener('input', onChangeSize)

function onChangeSize(event) {
    item.style.fontSize = `${event.target.value}px`;
}
