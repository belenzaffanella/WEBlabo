const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  menu.classList.toggle('is-open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menú');
    menu.classList.remove('is-open');
  });
});

const checkinForm = document.querySelector('#checkin-form');
const dateInput = document.querySelector('#checkin-date');
if (dateInput) {
  const now = new Date();
  const localToday = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
  dateInput.min = localToday;
}

checkinForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!checkinForm.reportValidity()) return;

  const formData = new FormData(checkinForm);
  const branch = formData.get('branch');
  const selectedDate = new Date(`${formData.get('date')}T00:00:00`);
  const date = new Intl.DateTimeFormat('es-AR', {day: 'numeric', month: 'long', year: 'numeric'}).format(selectedDate);
  const message = [
    'Hola, quiero organizar una visita al Laboratorio Golinelli.',
    `Sede de preferencia: ${branch}.`,
    `Día de preferencia: ${date}.`,
    '¿Puedo enviarles aquí la foto de mi orden para consultar preparación, cobertura y presupuesto?'
  ].join(' ');
  const whatsappUrl = `https://wa.me/5492284239415?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
