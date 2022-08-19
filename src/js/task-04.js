// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.

// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const counterEl = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const minusOne = (minus) => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};
const plusOne = (plus) => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

decrementButton.addEventListener("click", minusOne);
incrementButton.addEventListener("click", plusOne);
