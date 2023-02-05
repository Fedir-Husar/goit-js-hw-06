const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

//-------------------About .map(), second option
const ingradientsEl = ingredients.map(option =>{
  const ingradEl = document.createElement('li');
  ingradEl.textContent = option;
  ingradEl.classList.add('item');
 return ingradEl;
});

//---------------------Old school, first option)
// const ingradientsEl = [];
// ingredients.forEach( element =>{
// const ingradEl = document.createElement('li');
// ingradEl.textContent = element;
// ingradEl.classList.add('item');
// ingradientsEl.push(ingradEl);
// });

list.append(...ingradientsEl);

