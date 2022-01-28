// get audios
const audios = document.getElementsByTagName('audio');
// get play buttons
const playButtons = document.getElementsByClassName('playButton');
// get images
const images = document.getElementsByClassName('image');
// get counters
const counters = document.getElementsByClassName('counter');
const defaultCounter = document.getElementById('defaultCounter');

// make sure there are the same amount of audios / play buttons / images / counters
const checkForErrors = () => {
  if (
    !(
      audios.length === counters.length &&
      audios.length === playButtons.length &&
      images.length === counters.length
    )
  ) {
    console.error(
      'ERROR: Make sure there are the same amount of elements.',
      'audio: ' +
        audios.length +
        ' / play buttons: ' +
        playButtons.length +
        ' / images: ' +
        images.length +
        ' / counters: ' +
        counters.length
    );
  }
};
checkForErrors();

// COUNTER
const defaultZeros = defaultCounter.innerHTML;
// initialize counter on timesupdate
const initializeCounter = (audioId) => {
  const audio = audios[audioId];
  const counter = counters[audioId];

  audio.addEventListener(
    'timeupdate',
    () => {
      // set current time to active counter
      counter.innerHTML = formatCountdown(audio);

      // press pause on audio when track has ended
      const currentTime = audio.currentTime;
      const totalTime = audio.duration;
      console.log(currentTime, totalTime);
      if (currentTime === totalTime) {
        pause(audioId);
      }
    },
    false
  );
};

// format countdown time
const formatCountdown = (audio) => {
  const currentTime = audio.currentTime;
  const totalTime = audio.duration;
  const countdown = totalTime - currentTime;

  let countdownMin = Math.floor(countdown / 60);
  if (countdownMin < 10) {
    countdownMin = '0' + String(countdownMin);
  }
  let countdownSec = Math.floor(countdown % 60);
  if (countdownSec < 10) {
    countdownSec = '0' + String(countdownSec);
  }

  const countdownLength = countdownMin;
  const leadingZeros = defaultZeros.slice(0, -4);

  return leadingZeros + countdownMin + countdownSec;
};

// INITIALIZE AUDIO TOGGLE / COUNTER & PLAY BUTTON
let isPlaying = [];
for (let i = 0; i < audios.length; i++) {
  // initialize audio toggle function
  isPlaying.push(false);

  // initialize counter for each audio
  const audio = audios[i];
  initializeCounter(i);

  // add event listeners to buttons that toggles playing
  const playButton = playButtons[i];
  playButton.addEventListener('click', () => togglePlay(i));
}

// PLAY / PAUSE AUDIO
// value storing if a play button was first pressed
let firstTimeAudioPlay = true;

// toggle audio to play / pause and style the button accordingly
const togglePlay = (audioId) => {
  // hide disclaimer if first time clicked
  if (firstTimeAudioPlay) {
    hideDisclaimer();
  }
  // pause all other audios
  for (let i = 0; i < audios.length; i++) {
    if (audioId != i) {
      pause(i);
    }
  }

  // toggle clicked audio
  // if clicked audio is playing > pause it
  if (isPlaying[audioId]) {
    pause(audioId);
    // if clicked audio is paused > play
  } else {
    play(audioId);
  }
};

// play / pause specific audio
// 0 = first audio on page, 1 = second audio ...
const play = (audioId) => {
  // reset audio to start
  audios[audioId].currentTime = 0;
  // play clicked audio
  audios[audioId].play();
  // set clicked audio state to play
  isPlaying[audioId] = true;
  // set clicked play button to play
  playButtons[audioId].classList.remove('paused');
  // set image according to clicked audio to invisible
  images[audioId].classList.remove('invisible');
  // display counter
  counters[audioId].classList.remove('notDisplayed');
  // hide default counter
  defaultCounter.classList.add('notDisplayed');
};

const pause = (audioId) => {
  // pause clicked audio
  audios[audioId].pause();
  // set clicked audio state to paused
  isPlaying[audioId] = false;
  // set clicked play button to paused
  playButtons[audioId].classList.add('paused');
  // set image according to clicked audio to invisible
  images[audioId].classList.add('invisible');
  // hide counter
  counters[audioId].classList.add('notDisplayed');
  // show default counter
  defaultCounter.classList.remove('notDisplayed');
};

// HIDE DISCLAIMER
// after first play
const disclaimer = document.getElementById('disclaimer');
const hideDisclaimer = () => {
  firstTimeAudioPlay = false;
  disclaimer.classList.add('invisible');
};
