(function () {
  const cfg = window.THOMSON_SITE_CONFIG || {};
  const waNumber = (cfg.whatsappNumber || '').replace(/\D/g, '');
  const waMessage = encodeURIComponent(cfg.whatsappMessage || 'Hello');
  const waHref = waNumber ? `https://wa.me/${waNumber}?text=${waMessage}` : '#';
  document.querySelectorAll('.whatsapp-link').forEach((link) => {
    link.setAttribute('href', waHref);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
  });
  document.querySelectorAll('.contact-email-link').forEach((link) => {
    link.setAttribute('href', `mailto:${cfg.contactEmail || 'sales@thomson-broadcast.tv'}`);
  });
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
  const status = new URLSearchParams(location.search).get('status');
  const statusBox = document.querySelector('[data-contact-status]');
  if (statusBox && status) {
    const ok = status === 'success';
    statusBox.innerHTML = `<div class="alert ${ok ? 'alert-success' : 'alert-danger'} mb-0">${ok ? 'Thank you. Your message has been sent to Thomson Broadcast sales.' : 'Unable to send the message. Please email sales@thomson-broadcast.tv or use WhatsApp.'}</div>`;
  }
})();
