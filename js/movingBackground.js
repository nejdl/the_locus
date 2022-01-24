// move background on mouse move
const body = document.querySelector('body');

const moveBackground = (e) => {
  document.documentElement.style.setProperty(
    '--backgroundX',
    -e.clientX + 'px'
  );
  document.documentElement.style.setProperty(
    '--backgroundY',
    -e.clientY + 'px'
  );
};

body.addEventListener('mousemove', moveBackground);
