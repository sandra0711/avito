let isPassword = false;
const emailInput = document.getElementById('email');
emailInput.addEventListener('change', async (event) => {
  const sameEmail = document.querySelector('.alreadyExist');
  sameEmail.innerHTML = '';
  const email = event.target.value;
  response = await fetch('/users/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  const error = await response.json();
  if (error.error) {
    sameEmail.innerHTML = 'Данный email уже зарегистрирован в системе';
    event.target.value='';
  };
});
const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');
password1Input.addEventListener('change', async (event) => {
  password2Input.addEventListener('change', async (ev) => {
    const wrongPassword = document.querySelector('.passwordWrong');
    wrongPassword.innerHTML = '';
    const password1 = event.target.value;
    const password2 = ev.target.value;
    if (password1 !== password2) {
      // const samePassword = document.querySelector('.passwordSame');
      wrongPassword.innerHTML = 'Введенные пароли не совпадают!';
      ev.target.value='';
    } 
  });
});


