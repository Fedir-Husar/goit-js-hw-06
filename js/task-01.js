const categoryEl = document.querySelector("#categories");

console.log(`Number of categories: ${categoryEl.children.length}`);

const itemNameEl = [...categoryEl.children];

itemNameEl.forEach(element =>{
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
})
