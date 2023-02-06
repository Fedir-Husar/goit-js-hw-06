function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const button = document.querySelector('.change-color');



const handleClick = event => {

  bodyEl.style.backgroundColor = getRandomHexColor();
  button.innerHTML = getRandomHexColor();
};

button.addEventListener("click", handleClick);