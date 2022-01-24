// get audios
const audios = document.getElementsByTagName('audio');

// initialize audio toggle function
let isPlaying = [];
for (let i = 0; i < audios.length; i++) {
  isPlaying.push(false);
}

// get play buttons
const playButtons = document.getElementsByClassName('playButton');

// add event listeners to buttons that toggles playing
for (let i = 0; i < playButtons.length; i++) {
  const playButton = playButtons[i];
  playButton.addEventListener('click', () => togglePlay(i));
}

// toggle audio to play / pause and style the button accordingly
const togglePlay = (audioId) => {
  // pause all other audios
  for (let i = 0; i < audios.length; i++) {
    if (audioId != i) {
      isPlaying[i] = false;
      audios[i].pause();
      playButtons[i].classList.add('paused');
    }
  }

  // play clicked audio
  if (isPlaying[audioId]) {
    audios[audioId].pause();
    isPlaying[audioId] = false;
    playButtons[audioId].classList.add('paused');
  } else {
    audios[audioId].play();
    isPlaying[audioId] = true;
    playButtons[audioId].classList.remove('paused');
  }
};
