const splash = document.getElementById('splash');
const splashLogo = document.getElementById('splashlogo');
const splashImg = document.getElementById('splashImg');
const centeredText = document.getElementById('centeredText');
const audioIntro = new Audio('assets/audio/audio10.mp3');

const toggleSplash = () => {
  splashLogo.classList.toggle('invisible');
};

splash.addEventListener('click', () => {
  toggleSplash();
  playFirst();
  setTimeout(() => {
    splashImg.style.zIndex = '0';
  }, 5000);
  setTimeout(() => {
    splash.classList.toggle('invisible');
  }, 5000);
  setTimeout(() => {
    splash.style.zIndex = '0';
  }, 10000);
  setTimeout(() => {
    centeredText.classList.toggle('invisible');
  }, 10000);
});

const playFirst = () => {
  audioIntro.play();
};
const PauseIntro = () => {
  audioIntro.pause();
};

document.querySelectorAll('.playButton').forEach((item) => {
  item.addEventListener('click', (event) => PauseIntro());
});
