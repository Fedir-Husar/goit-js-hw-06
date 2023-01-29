const categoryEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

const itemNameEl = categoryEl.querySelectorAll('.item');

itemNameEl.forEach(element =>{
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${(element.querySelector('ul')).children.length}`);
})
