const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listEl = document.querySelector('#ingridients');

// const newList = ingredients.map(ingridient => {

//  const ingridientLiEl = document.createElement('li');
//  ingridientLiEl.classList.add('item');
//  ingridientLiEl.textContent=ingridient;

// return ingridientLiEl;

// });

// listEl.append(...newList);

const ulElem = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ulElem.innerHTML = list;