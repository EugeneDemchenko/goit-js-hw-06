const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Empty fields! Do something!)");
  }

  const formObj = {
    email: email.value,
    password: password.value,
  }
  console.log(formObj);
  event.currentTarget.reset();
}
