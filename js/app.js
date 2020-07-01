let buttonState = 0 // 0 or 1

const authorElem = document.querySelector('.card__author');
const shareBtn = document.querySelector('.card__author--btn');
const shareOverlay = document.querySelector('.card__author--btn--overlay');
const avatarElem = document.querySelector('.card__author__avatar');

shareBtn.addEventListener('click', (e) => {

  buttonState = buttonState === 0 ? 1 : 0;

  if (window.innerWidth < 900) {
    authorElem.classList.toggle('show-share-links');
    avatarElem.classList.toggle('hidden');
  }

  shareBtn.classList.toggle('show-btn-share');
  shareOverlay.classList.toggle('hidden');
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 900) {
    if (buttonState === 0) {
      authorElem.classList.remove('show-share-links');
      avatarElem.classList.remove('hidden');
      shareOverlay.classList.add('hidden');
      shareBtn.classList.remove('show-btn-share');
    } else if (buttonState === 1) {
      authorElem.classList.add('show-share-links');
      avatarElem.classList.add('hidden');
      shareOverlay.classList.remove('hidden');
      shareBtn.classList.add('show-btn-share');
    }
  } else {
    if (buttonState === 0) {
      shareOverlay.classList.add('hidden');
      shareBtn.classList.remove('show-btn-share');
      authorElem.classList.remove('show-share-links');
      avatarElem.classList.remove('hidden');
    } else if (buttonState === 1) {
      shareOverlay.classList.remove('hidden');
      shareBtn.classList.add('show-btn-share');
      authorElem.classList.remove('show-share-links');
      avatarElem.classList.remove('hidden');
    }
  }
});