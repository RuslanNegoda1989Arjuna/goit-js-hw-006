// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

// const onNameInput = (event) => {
//   outputEl.textContent = event.currentTarget.value;

//   if (outputEl.textContent === "") {
//     outputEl.textContent = "Anonymous";
//   }
// };

// inputEl.addEventListener("input", onNameInput);

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const enterName = refs.input.addEventListener("input", onPutName);

function onPutName(event) {
  refs.span.textContent = event.currentTarget.value;

  if (refs.span.textContent === "") {
    refs.span.textContent = "Anonymous";
  }
}
