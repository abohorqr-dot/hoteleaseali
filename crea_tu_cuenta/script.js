(function () {
  const form = document.getElementById('registerForm');

  const firstName = document.getElementById('firstName');
  const lastName  = document.getElementById('lastName');
  const docType   = document.getElementById('docType');
  const docNumber = document.getElementById('docNumber');
  const phone     = document.getElementById('phone');
  const email     = document.getElementById('email');
  const password  = document.getElementById('password');
  const confirm   = document.getElementById('confirm');
  const country   = document.getElementById('country');
  const birth     = document.getElementById('birth');
  const role      = document.getElementById('role');
  const status    = document.getElementById('status');
  const terms     = document.getElementById('terms');

  // Toggles 👁️
  const togglePass    = document.getElementById('togglePass');
  const toggleConfirm = document.getElementById('toggleConfirm');
  const toggle = (input, btn) => {
    const t = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', t);
    btn.textContent = t === 'password' ? '👁️' : '🙈';
  };
  togglePass.addEventListener('click', () => toggle(password, togglePass));
  toggleConfirm.addEventListener('click', () => toggle(confirm, toggleConfirm));

  // Fuerza de contraseña
  const bar = document.getElementById('strengthBar');
  const txt = document.getElementById('strengthText');

  function scorePassword(pw) {
    let s = 0;
    if (!pw) return 0;
    const tests = [
      /.{8,}/,      // longitud
      /[a-z]/,      // minúscula
      /[A-Z]/,      // mayúscula
      /\d/,         // número
      /[^A-Za-z0-9]/ // símbolo
    ];
    tests.forEach(rx => { if (rx.test(pw)) s += 20; });
    return Math.min(s, 100);
  }

  function renderStrength(val){
    bar.style.width = `${val}%`;
    if (val < 40){ bar.style.background = '#f87171'; txt.textContent = 'Fuerza: Débil'; }
    else if (val < 80){ bar.style.background = '#fbbf24'; txt.textContent = 'Fuerza: Media'; }
    else { bar.style.background = '#22c55e'; txt.textContent = 'Fuerza: Fuerte'; }
  }

  password.addEventListener('input', () => renderStrength(scorePassword(password.value)));
  renderStrength(0);

  // Validación básica
  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!firstName.value.trim()) return alert('Ingresa tus nombres.');
    if (!lastName.value.trim())  return alert('Ingresa tus apellidos.');
    if (!docType.value)          return alert('Selecciona el tipo de documento.');
    if (!docNumber.value.trim()) return alert('Ingresa el número de documento.');
    if (!email.value.trim() || !isEmail(email.value)) return alert('Correo inválido.');
    if (!password.value || password.value.length < 8) return alert('La contraseña debe tener al menos 8 caracteres.');
    if (confirm.value !== password.value) return alert('Las contraseñas no coinciden.');
    if (!terms.checked) return alert('Debes aceptar los Términos y la Política de privacidad.');

    // Aquí harías el POST a tu backend
    alert('Registro exitoso (demo). Ahora puedes iniciar sesión.');
    window.location.href = '../inicio_sesion/index.html';
  });
})();

