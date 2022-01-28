const introOverlay = document.getElementById('intro');
// disclaimer has already been declared before
// const disclaimer = document.getElementById('disclaimer');
const imageContainer = document.getElementById('imageContainer');
const textContainer = document.getElementById('textContainer');
const introTransitionTime = 4000;

// add event listener on transparent intro overlay
//  for first click only
introOverlay.addEventListener('click', () => {
  // play first audio and fade in first image
  // this is a function from /js/playAndPauseAudio.js
  // it takes the audio number as a parameter (e.g. 0 = first audio, 1 = second ...)
  play(0);

  // hide overlay
  introOverlay.classList.add('notDisplayed');

  // fade out disclaimer
  disclaimer.classList.add('invisible');

  // fade in image
  // image has a css transition of 5s
  imageContainer.classList.remove('invisible');

  // fade in text after timeout
  // so that text only starts appearing after introTransitionTime
  // text then has an additional css transition of 5s
  setTimeout(() => {
    textContainer.classList.remove('invisible');
  }, introTransitionTime);
}),
  { once: true };
