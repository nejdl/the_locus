// reset opacity transition
const transitionSpeedOpacity = 5;

const resetOpacityTransition = () => {
  document.documentElement.style.setProperty(
    '--transitionSpeedOpacity',
    transitionSpeedOpacity + 's'
  );
};

resetOpacityTransition();
