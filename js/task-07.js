const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener("input", chengeSize);

function chengeSize() {
    textEl.style.fontSize = inputEl.value + 'px';
    
};

