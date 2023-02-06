function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const button = document.querySelector('.change-color');



const handleClick = event => {
 const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  button.innerHTML = randomColor;
};

button.addEventListener("click", handleClick);