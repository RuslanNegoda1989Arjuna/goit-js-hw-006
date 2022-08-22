// const enterEl = document.querySelector("#ingredients");

// const elementsIngredients = ingredients.map((ingradient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingradient;
//   itemEl.classList.add("item");

//   return itemEl;
// });

// enterEl.append(...elementsIngredients);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

// const createIngredients = ingredients.map((element) => {
//   const addElement = document.createElement("li");
//   console.log(addElement);
//   addElement.textContent = element;
//   return addElement;
// });

// console.log(createIngredients);

// listEl.append(...createIngredients);

const addItem = ingredients
  .map((element) => {
    const creatingItem = `<li>${element}</li>`;
    console.log(creatingItem);
    return creatingItem;
  })
  .join("");

listEl.insertAdjacentHTML("afterbegin", addItem);
