(function () {
  // Saludo dinámico
  const chip = document.getElementById('greetchip');
  const h = new Date().getHours();
  chip.textContent = h < 12 ? 'BUENOS DÍAS' : (h < 19 ? 'BUENAS TARDES' : 'BUENAS NOCHES');

  // Reserva rápida: stepper huéspedes
  const guests = document.getElementById('guests');
  document.getElementById('less').addEventListener('click', () => {
    const n = Math.max(1, parseInt(guests.value || '1', 10) - 1);
    guests.value = n;
  });
  document.getElementById('more').addEventListener('click', () => {
    const n = Math.min(8, parseInt(guests.value || '1', 10) + 1);
    guests.value = n;
  });

  // Envío demo
  document.getElementById('quickForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Buscando disponibilidad (demo)…');
  });

  // Progreso
  const checks = Array.from(document.querySelectorAll('.stepCheck'));
  const pctEl = document.getElementById('pct');
  const bar = document.getElementById('bar');

  function updateProgress(){
    const done = checks.filter(c => c.checked).length;
    const pct = Math.round(done / checks.length * 100);
    pctEl.textContent = pct + '%';
    bar.style.width = pct + '%';
  }
  checks.forEach(c => c.addEventListener('change', updateProgress));
  updateProgress();

  // Mostrar imagen si existe
  const hero = document.querySelector('.hero-img');
  if (hero) {
    const test = new Image();
    test.onload = () => hero.style.display = 'block';
    test.onerror = () => hero.style.display = 'none';
    test.src = hero.getAttribute('src');
  }

  // Promo
  document.getElementById('applyCoupon').addEventListener('click', () => {
    alert('Cupón aplicado (demo): GOLD30');
  });
})();
