const fieldEl = document.querySelector('#name-input');
const userNameEl = document.querySelector('#name-output');

fieldEl.addEventListener('input', onInputChange)


function onInputChange(event) {
    userNameEl.textContent = event.currentTarget.value    
}

