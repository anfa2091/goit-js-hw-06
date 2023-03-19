const categoriesLi = document.querySelector('#categories');
const categoriesTotal = categoriesLi.children;

console.log(`Number of categories: ${categoriesTotal.length}`);

for (const category of categoriesTotal) {
    console.log("");
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}
