const button = document.getElementById('buttonId');
const email = document.getElementById('emailId');
const password = document.getElementById('passwordId');

function validation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validation);
