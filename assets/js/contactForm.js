

  
  


const name = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
const contactReason = document.getElementById('inputContactReason');

const phone = document.getElementById('inputPhone');

function phoneFormatted() {
  
  const phoneFormatted = phone.value
  .replace(/[^0-9]/g, '')
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{4,5})(\d{4})/, '$1-$2')
  .replace(/(-\d{4})\d+?$/, '$1');

  phone.value = phoneFormatted
}

phone.onkeyup = phoneFormatted;


