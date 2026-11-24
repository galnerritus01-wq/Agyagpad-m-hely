const program = document.querySelector('#program');
const requested = new URLSearchParams(window.location.search).get('program');
if (requested && Array.from(program.options).some(option => option.value === requested)) {
  program.value = requested;
}
