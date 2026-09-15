const presentButton = document.getElementById('open-present');
const cake = document.getElementById('cake');
const cakeTitle = document.getElementById('cake-title');

presentButton.addEventListener('click', () => {
  cake.hidden = false;
  presentButton.setAttribute('aria-expanded', 'true');
  presentButton.textContent = 'Your present is open ♡';
  cakeTitle.focus({ preventScroll: true });
  cake.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'nearest',
  });
});
