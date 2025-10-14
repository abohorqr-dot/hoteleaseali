(function () {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const goBtn = document.getElementById('goBtn');
  const forgot = document.getElementById('forgotLink');
  const retry = document.getElementById('retry');

  // Validación mínima para evitar envíos vacíos
  const validate = () =>
    email.value.trim() !== '' && password.value.trim() !== '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) {
      alert('Por favor ingresa tu correo y contraseña.');
      return;
    }
    // Aquí conectarías tu backend.
    alert('Inicio de sesión exitoso (demo).');
  });

  // El botón circular hace lo mismo que enviar (como en la referencia)
  goBtn.addEventListener('click', () => {
    form.requestSubmit();
  });

  // Enlace "Olvidé mi Contraseña" (demo)
  forgot.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Te enviaremos instrucciones si tu correo está registrado.');
  });

  // "Reintentar" limpia el formulario
  retry.addEventListener('click', () => {
    email.value = '';
    password.value = '';
    email.focus();
  });
})();
