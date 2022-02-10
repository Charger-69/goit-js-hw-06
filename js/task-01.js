// const numberOfCategories = document.querySelectorAll("ul").length;
// console.log(`Number of categories: ${numberOfCategories}`);

const numberOfCategories = document.getElementsByClassName('item').length;
console.log(`Number of categories: ${numberOfCategories}`);

const сategoryElements = document.querySelectorAll('#categories>li');
сategoryElements.forEach(element => {
console.log(`Category: ${element.firstElementChild.textContent}`);
console.log(`Elements: ${element.lastElementChild.children.length}`)
})