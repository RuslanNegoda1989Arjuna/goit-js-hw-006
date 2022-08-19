// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
//  знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
//  кількість елементів в категорії(усіх < li >, вкладених в нього).

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach(function (category) {
  const titelEl = category.firstElementChild.textContent;
  const numberCategoryEl = category.lastElementChild.children.length;

  console.log("Category:", titelEl);
  console.log("Elements:", numberCategoryEl);
});
