// let counterValue = 0;

// const counterEl = document.querySelector("#value");

// const decrementButton = document.querySelector(
//   'button[data-action="decrement"]'
// );
// const incrementButton = document.querySelector(
//   'button[data-action="increment"]'
// );

// const minusOne = (minus) => {
//   counterValue -= 1;
//   counterEl.textContent = counterValue;
// };
// const plusOne = (plus) => {
//   counterValue += 1;
//   counterEl.textContent = counterValue;
// };

// decrementButton.addEventListener("click", minusOne);
// incrementButton.addEventListener("click", plusOne);

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const spanEl = document.querySelector("#value");
spanEl.textContent = counterValue;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

const onMinusOne = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

const onPlusOne = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

decrementEl.addEventListener("click", onMinusOne);
incrementEl.addEventListener("click", onPlusOne);
