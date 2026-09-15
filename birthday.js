const openLetterButton = document.getElementById('open-letter');
const closedLetter = openLetterButton;
const openedLetter = document.getElementById('opened-letter');
const messageHeading = document.getElementById('message-heading');
const present = document.getElementById('present');
const presentButton = document.getElementById('open-present');
const cake = document.getElementById('cake');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const letterSound = new Audio('Birthday/letter-open.mp3');
const giftSound = new Audio('Birthday/gift-open.mp3');
let letterOpening = false;
let presentOpening = false;

letterSound.preload = 'auto';
letterSound.volume = 0.18;
giftSound.preload = 'auto';
giftSound.volume = 0.16;

const playSound = (sound) => {
  sound.currentTime = 0;
  sound.play().catch(() => {
    // Audio is optional; browser restrictions or loading failures must not block the reveal.
  });
};

openLetterButton.addEventListener('click', () => {
  if (letterOpening) return;
  letterOpening = true;
  playSound(letterSound);
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
  window.setTimeout(revealLetter, 1900);
});

presentButton.addEventListener('click', () => {
  if (presentOpening) return;
  presentOpening = true;
  playSound(giftSound);
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
  window.setTimeout(revealCake, 620);
});
