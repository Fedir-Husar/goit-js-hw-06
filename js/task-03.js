const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/// second option

const galleryElement = document.querySelector('.gallery');

const galleryItem = document.createElement('li');

const galleryImage = document.createElement('img');

const elMarkup = images.map((image) =>`<li><img src = ${image.url} alt= ${image.alt} width = 360 ></img></li>`).join("");
console.log(elMarkup);
galleryElement.insertAdjacentHTML("beforeend", elMarkup);
console.log(galleryElement);



//// first option, Repeta lection

// const galleryElementsContainer = document.querySelector('.gallery') 

// const makeGaleryEl = ({url,alt}) => {
//   const galleryItem = document.createElement('li'); 
//   const galleryImage = document.createElement('img');
//   galleryImage.src = url;
//   galleryImage.alt = alt;
//   galleryImage.width = 360;


//   galleryItem.append( galleryImage);
//   return galleryItem;
// }

// const elements = images.map(makeGaleryEl);
// console.log(elements);
// galleryElementsContainer.append(...elements);




