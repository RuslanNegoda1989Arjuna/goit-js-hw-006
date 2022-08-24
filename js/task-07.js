// const inputEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");

// textEl.style.fontSize = `${inputEl.value}px`;

// inputEl.addEventListener("input", onChangeFontSize);

// function onChangeFontSize(event) {
//   const sizeValue = event.currentTarget.value;

//   textEl.style.fontSize = `${sizeValue}px`;
// }

// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//   перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.span.style.fontSize = `${refs.input.value}px`;

refs.input.addEventListener("input", onChengeFontSize);

function onChengeFontSize(event) {
  const fontSizeEl = event.currentTarget.value;
  console.log(event.currentTarget.value);

  refs.span.style.fontSize = `${fontSizeEl}px`;
}
