const title = document.getElementById('title');
const description = document.getElementById('description');

const toggleDescription = () => {
  description.classList.toggle('invisible');
};

title.addEventListener('click', toggleDescription);
// description.addEventListener('click', toggleDescription);
