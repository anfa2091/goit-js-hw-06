const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = document.getElementById("ingredients");

ingredients.forEach((value) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = value;
  items.appendChild(li);
});