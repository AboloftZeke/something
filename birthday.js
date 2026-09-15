const openLetterButton = document.getElementById('open-letter');
const closedLetter = document.getElementById('closed-letter');
const openedLetter = document.getElementById('opened-letter');
const messageHeading = document.getElementById('message-heading');
const present = document.getElementById('present');
const presentButton = document.getElementById('open-present');
const cake = document.getElementById('cake');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

openLetterButton.addEventListener('click', () => {
  openLetterButton.setAttribute('aria-expanded', 'true');

  const revealLetter = () => {
    closedLetter.hidden = true;
    openedLetter.hidden = false;
    messageHeading.focus({ preventScroll: true });
    openedLetter.scrollIntoView({
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
      block: 'start',
    });
  };

  if (reducedMotion.matches) {
    revealLetter();
    return;
  }

  closedLetter.classList.add('is-opening');
  window.setTimeout(revealLetter, 280);
});

presentButton.addEventListener('click', () => {
  presentButton.setAttribute('aria-expanded', 'true');

  const revealCake = () => {
    present.hidden = true;
    cake.hidden = false;
  };

  if (reducedMotion.matches) {
    revealCake();
    return;
  }

  presentButton.classList.add('is-opening');
  window.setTimeout(revealCake, 220);
});
