// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого
// рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls > input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxs = [];
  amount = refs.input.value;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;

    boxs.push(box);
  }
  console.log(boxs);
  refs.boxes.append(...boxs);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = 0;
}
