const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputPhone = document.getElementById('inputPhone');
const inputReason = document.getElementById('inputContactReason');

function phoneFormatted() {
  const phoneFormatted = inputPhone.value
    .replace(/[^0-9]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');

  inputPhone.value = phoneFormatted
}

inputPhone.onkeyup = phoneFormatted;

function submitContact(event) {
  event.preventDefault();

  const client = inputName.value;
  const email = inputEmail.value;
  const phone = inputPhone.value;
  const reason = inputReason.value;

  //iniciar loading

  fetch(`https://us-central1-hator-grupo-straceri.cloudfunctions.net/sendMail?email=${email}&client=${client}&phone=${phone}&reason=${reason}`)
  .then(() => {
    //finalizar loading;
    // exibir algo falando que deu certo;
  }).catch(() => {
    //finalizar loading;
    // exibir algo falando que deu errado;
  })
}
