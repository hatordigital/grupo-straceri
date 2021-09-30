const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputPhone = document.getElementById('inputPhone');
const inputReason = document.getElementById('inputContactReason');
const buttonText = document.getElementById('buttonText');
const loading = document.getElementById('loading');

function phoneFormatted() {
  const phoneFormatted = inputPhone.value
    .replace(/[^0-9]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');

  inputPhone.value = phoneFormatted
}

inputPhone.onkeyup = phoneFormatted;

toastr.options = {
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function submitContact(event) {
  event.preventDefault();

  const client = inputName.value;
  const email = inputEmail.value;
  const phone = inputPhone.value;
  const reason = inputReason.value;


  buttonText.style.display = 'none';

  loading.style.display = 'inline-block'

  fetch(`https://us-central1-site-38e20.cloudfunctions.net/enviarEmail?email=${email}&client=${client}&phone=${phone}&reason=${reason}`)
  .then(() => {

    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    inputReason.value = '';

    loading.style.display = 'none'
    buttonText.style.display = 'block';

    toastr.success('Contato enviado com sucesso!', {timeOut: 8000})
  }).catch(() => {
    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    inputReason.value = '';
    
    loading.style.display = 'none'
    buttonText.style.display = 'block';
    toastr.success('Contato enviado com sucesso!', {timeOut: 8000})
  })
}
