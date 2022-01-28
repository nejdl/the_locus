// move background on mouse move
const body = document.querySelector('body');

const moveBackground = (e) => {
  let positionX = e.clientX;
  let positionY = e.clientY;
  if (e.touches) {
    positionX = e.touches[0].clientX;
    positionY = e.touches[0].clientY;
  }
  document.documentElement.style.setProperty(
    '--backgroundX',
    -positionX  + 'px'
  );
  document.documentElement.style.setProperty(
    '--backgroundY',
    -positionY  + 'px'
  );
};

body.addEventListener('mousemove', moveBackground);
body.addEventListener('touchmove', moveBackground);
