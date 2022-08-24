// const inputEl = document.querySelector("#validation-input");

// const onCheckNumberSimbol = (event) => {
//   const inputLength = event.currentTarget.value.length;

//   console.log(inputLength);
//   console.log(inputEl.dataset.length);

//   const numberLength = Number(inputEl.dataset.length);

//   if (inputLength === numberLength) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// };

// inputEl.addEventListener("blur", onCheckNumberSimbol);

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data - length.

// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS - класи valid і invalid,
//   які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onSixSimbols);

const checkNumber = Number(inputEl.dataset.length);

function onSixSimbols(event) {
  const numberInputSimbol = event.currentTarget.value.length;
  console.log(numberInputSimbol);

  if (numberInputSimbol === checkNumber) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
