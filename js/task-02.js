const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const ingradientsEl = [];
console.log(list);
ingredients.forEach( element =>{
const ingradEl = document.createElement('li');
ingradEl.textContent = element;
ingradEl.classList.add('item');
ingradientsEl.push(ingradEl);
});
list.append(...ingradientsEl);

