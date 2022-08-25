// const formEl = document.querySelector(".login-form");
// console.log(formEl);

// formEl.addEventListener("submit", onSubmite);

// function onSubmite(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Заповніть всі поля будь ласка");
//   }
//   const loginObj = {
//     Email: email.value,
//     password: password.value,
//   };
//   console.log(loginObj);

//   event.currentTarget.reset();
// }

// Обробка відправлення форми form.login - form повинна відбуватися відповідно до події submit.

// Під час відправлення форми сторінка не повинна перезавантажуватися.

// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.

// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
  form: document.querySelector(".login-form"),
  button: document.querySelector(".button"),
};
// console.log(refs.form.elements);
refs.form.addEventListener("submit", onFullField);

function onFullField(event) {
  event.preventDefault();

  console.log(event.currentTarget.elements);

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Enter all the fields");
  }

  const objLoginForm = {
    Email: email.value,
    Password: password.value,
  };
  console.log(objLoginForm);
}
