(function () {
  // Saludo dinámico
  const greeting = document.getElementById('greeting');
  const h = new Date().getHours();
  greeting.textContent = h < 12 ? 'BUENOS DÍAS' : (h < 19 ? 'BUENAS TARDES' : 'BUENAS NOCHES');

  // Tabs
  const tabPass = document.getElementById('tab-password');
  const tabCode = document.getElementById('tab-code');
  const formPass = document.getElementById('formPassword');
  const formCode = document.getElementById('formCode');

  const activate = (target) => {
    const isPass = target === 'pass';
    tabPass.classList.toggle('is-active', isPass);
    tabCode.classList.toggle('is-active', !isPass);
    formPass.classList.toggle('is-hidden', !isPass);
    formCode.classList.toggle('is-hidden', isPass);
  };
  tabPass.addEventListener('click', () => activate('pass'));
  tabCode.addEventListener('click', () => activate('code'));

  // Mostrar/ocultar contraseña
  const password = document.getElementById('password');
  const toggle = document.getElementById('togglePass');
  toggle.addEventListener('click', () => {
    const t = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', t);
    toggle.textContent = t === 'password' ? '👁️' : '🙈';
  });

  // Demo envío
  document.getElementById('formPassword').addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí conectarías con tu backend
    alert('Ingresaste con contraseña (demo).');
  });

  // Enviar código (demo)
  const sendCodeBtn = document.getElementById('sendCode');
  sendCodeBtn.addEventListener('click', () => {
    alert('Código enviado (demo). Revisa tu correo.');
  });

  document.getElementById('formCode').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ingresaste con código (demo).');
  });

  // Mostrar avión si existe el asset
  const plane = document.querySelector('.plane');
  if (plane) {
    const testImg = new Image();
    testImg.onload = () => { plane.style.display = 'block'; };
    testImg.onerror = () => { plane.style.display = 'none'; };
    testImg.src = plane.getAttribute('src');
  }
})();
