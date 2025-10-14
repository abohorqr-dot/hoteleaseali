(function () {
  const form = document.getElementById('registerForm');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirm = document.getElementById('confirm');
  const goBtn = document.getElementById('goBtn');

  const validate = () => {
    if (!name.value.trim()) { alert('Por favor ingresa tu nombre.'); return false; }
    if (!email.value.trim()) { alert('Por favor ingresa tu correo.'); return false; }
    if (!password.value.trim()) { alert('Ingresa una contraseña.'); return false; }
    if (password.value !== confirm.value) { alert('Las contraseñas no coinciden.'); return false; }
    return true;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Aquí conectarías con tu backend
    alert('Registro exitoso (demo). Ahora puedes iniciar sesión.');
    window.location.href = '../inicio_sesion/index.html';
  });

  goBtn.addEventListener('click', () => {
    form.requestSubmit();
  });
})();
