function updateSliderValue(value) {
    document.getElementById('slider-value').textContent = value;
  }

  function validateForm(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const usernameInput = document.getElementById('username');
    const passwordMatchError = document.getElementById('password-match-error');

    const password = passwordInput.value;

    // Regular expression to match alphanumeric characters only
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (confirmPasswordInput.value === password) {
      if (password.length >= 8 && alphanumericRegex.test(password)) {
        passwordMatchError.style.display = 'none';
        // Proceed with form submission
        event.target.submit();
      } else {
        passwordMatchError.textContent = 'Password must be at least eight characters long and can only contain alphanumeric characters.';
        passwordMatchError.style.display = 'block';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        passwordInput.focus();
      }
    } else {
      passwordMatchError.textContent = 'Passwords do not match. Please try again.';
      passwordMatchError.style.display = 'block';
      passwordInput.value = '';
      confirmPasswordInput.value = '';
      passwordInput.focus();
    }
}