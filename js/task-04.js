const counterValue = {
    value: 0,
} 


const incraseEl = document.querySelector('[data-action="increment"]');
const reduceEl = document.querySelector('[data-action="decrement"]');
const countEl = document.querySelector('#value');

incraseEl.addEventListener('click', function () {
    countEl.textContent = counterValue.value += 1
    console.log(incraseEl);
})

reduceEl.addEventListener('click', function () {
    countEl.textContent = counterValue.value -= 1
    console.log(reduceEl);
})

