const inputEl = document.querySelector('#validation-input');
const lengthValue = Number(inputEl.dataset.length)


inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('focus', onInputFocus)
//    console.log(inputEl); 

function onInputBlur(event) {
    event.currentTarget.value.length === lengthValue ? inputEl.classList.add('valid') : inputEl.classList.add('invalid')
}
function onInputFocus() {
    inputEl.classList.remove('valid') || inputEl.classList.remove('invalid')
}