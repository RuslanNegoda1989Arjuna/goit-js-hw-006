// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
//  знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
//  кількість елементів в категорії(усіх < li >, вкладених в нього).

const listEl = document.querySelector("#categories");

console.log(listEl);
console.log("кількість категорій", listEl.children.length);

const itemEl = document.querySelectorAll(".item");

const titlefirts = itemEl.forEach(function (title) {
  const title1 = title.firstElementChild;
  console.log(title1.textContent);
  const numberCat = title.lastElementChild.children.length;
  console.log(numberCat);
});

// const outputRes = itemEl.map((item) => {
//   const title1 = item.firstElementChild;

//   return title1;
// });
// console.log(outputRes);
