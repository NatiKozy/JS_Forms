const form = document.forms[0];
const input = form.elements.promocode;
console.log(input);
const btn = form.elements.btn;
console.log(btn);
const radioInput = form.elements.radio;
console.log(radioInput);
btn.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log(input.value);
})
let isChecked = true;
if(radioInput == isChecked){
btn.disabled = true;
}
// if(input.value === ''){
//   document.forms[0].querySelector('[type="submit"]').disabled = true;
// } else {
//   document.forms[0].querySelector('[type="submit"]').disabled = false;
// }
// document.forms[0].querySelector('[type="submit"]').disabled = true;
// if ()
// let food = "sushi";
// food= 'pizza';

// switch (food) {
//   case "sushi":
//     console.log("Sushi is originally from Japan.");
//     break;
//   case "pizza":
//     console.log("Pizza is originally from Italy.");
//     break;
//   default:
//     console.log("I have never heard of that dish.");
//     break;
// }
//Проверка для одного поля
// let errors = []; //массив с ошибками
// function checkValidity(input) {
//     let validity = input.validity;
//     if (validity.valueMissing) {
//       errors.push('Поле ' + input.placeholder + ' не заполнено');
//     }

//     if (validity.patternMismatch) {
//       errors.push('Неверный формат заполнения');
//     }
// 		if (validity.rangeOverflow) {
//       let max = getAttributeValue(input, 'max');
// 			errors.push('Максимальное значение не может быть больше, чем ' + max);
//     }
//     if (validity.rangeUnderflow) {
//       let min = getAttributeValue(input, 'min');
// 			errors.push('Минимальное значение не может быть больше, чем ' + min);
//     }
// 		//И остальные проверки валидности...
// }

// //Проверка для всех полей
// function checkAll() {
// 		//Получаем все инпуты
//     errors = [];
//     let inputs = document.querySelectorAll("input");

// 		//Перебираем их и на каждый вызываем функцию валидации
//     for (let input of inputs) {
//         checkValidity(input);
//     }

// 		//Выводим ошибки в div
//   document.getElementById('errorsInfo').innerHTML=
//   errors.join(' . <br>');
// }

// //проверка почты
// function ValidateEmail(emailField) {
//   const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//   if (emailField.value.match(mailFormat)) {
//       return true;
//   } else {
//       console.log("Ваш адрес электронной почты введён неверно!");
//       return false;
//   }
// }


// const form = document.forms.form;
// const select = form.elements.genres;
// console.log(select.value);

//Дополните код, добавив проверки на rangeOverflow, rangeUnderflow, stepMismatch, tooLong, tooShort, valueMissing в функцию checkValidity. Каждая проверка должна добавлять соответствующую ошибку в массив errors, если проверка не пройдена. Как пример смотрите проверку на patternMismatch.
//В обработчике события input на элемент formInput, добавьте код, чтобы все изменения в нём выводились в консоли.

// const formElement = document.querySelector('.form');
// const formInput = formElement.querySelector('.form__input');

// let errors = [];

// function checkValidity(input) {
//   let validity = input.validity;

//   if (validity.patternMismatch) {
//     errors.push('Неверный формат заполнения');
//   }
//   if (validity.stepMismatch) {
//     errors.push('Значение не соответствует указаному шагу');
//   }
//   if (validity.tooLong) {
//     errors.push('Значение слишком длинное');
//   }
//   if (validity.tooShort) {
//     errors.push('Значение слишком короткое');
//   }
//   if (validity.valueMissing) {
//     errors.push('Поле ' + input.placeholder + ' не заполнено');
//   }
//   if (validity.rangeOverflow) {
//     let max = getAttributeValue(input, 'max');
//     errors.push('Максимальное значение не может быть больше, чем ' + max);
//   }
//   if (validity.rangeUnderflow) {
//     let min = getAttributeValue(input, 'min');
//     errors.push('Минимальное значение не может быть больше, чем ' + min);
//   }
// }


// //Проверка для всех полей
// function checkAll() {
//   //Получаем все инпуты
//   let inputs = document.querySelectorAll("input");

//   //Перебираем их и на каждый вызываем функцию валидации
//   for (let input of inputs) {
//     checkValidity(input);
//   }

//   //Выводим ошибки в div 
//   let errorDiv = document.getElementById('errorsInfo');
//   errorDiv.innerHTML = errors.join('. \n');
// }

// formElement.addEventListener('submit', function (event) {
//   event.preventDefault();
//   //Сброс предыдущих ошибок
//   errors = [];
//   checkAll();
// });

// formInput.addEventListener('input', function (evt) {
//   //Значение будет храниться в свойстве value объекта evt
//   console.log(evt.target.value);
// });
