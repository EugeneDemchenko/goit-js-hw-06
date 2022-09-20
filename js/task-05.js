const fieldEl = document.querySelector('#name-input');
const userNameEl = document.querySelector('#name-output');

fieldEl.addEventListener('input', onInputChange)


function onInputChange(event) {
        event.currentTarget.value !== "" ? userNameEl.textContent = event.currentTarget.value : userNameEl.textContent = 'Anonymous'   
}

