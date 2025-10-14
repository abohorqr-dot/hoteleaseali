(function () {
  const form = document.getElementById('recoverForm');
  const email = document.getElementById('email');

  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!email.value.trim() || !isEmail(email.value)) {
      alert('Ingresa un correo válido.');
      return;
    }
    // Aquí harías el POST a tu backend para enviar el enlace
    alert('Si el correo está registrado, te enviamos un enlace de recuperación.');
    window.location.href = '../inicio_sesion/index.html';
  });

  // Mostrar avión si existe
  const plane = document.querySelector('.plane');
  if (plane) {
    const img = new Image();
    img.onload = () => { plane.style.display = 'block'; };
    img.onerror = () => { plane.style.display = 'none'; };
    img.src = plane.getAttribute('src');
  }
})();
