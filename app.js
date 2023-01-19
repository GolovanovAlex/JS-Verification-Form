// ---- ---- Const ---- ---- //
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

inputs.forEach((input, index1) => {
  input.addEventListener('keyup', (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    // ---- ---- Length number ---- ---- //
    if (currentInput.value.length > 1) {
      currentInput.value = '';
      return;
    }

    // ---- ---- Remove Input Atr 'Disabled' ---- ---- //
    if (
      nextInput &&
      nextInput.hasAttribute('disabled') &&
      currentInput.value !== ''
    ) {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    // ---- ---- Remove 'Backspace' ---- ---- //
    if (e.key === 'Backspace') {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute('disabled', true);
          currentInput.value = '';
          prevInput.focus();
        }
      });
    }

    // ---- ---- Button Class 'Active' ---- ---- //
    if (!inputs[3].disabled && inputs[3].value !== '') {
      button.classList.add('active');
      return;
    }
    button.classList.remove('active');
  });
});

window.addEventListener('load', () => inputs[0].focus());
