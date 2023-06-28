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
let errors = []; //массив с ошибками
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
      errors.push('Поле ' + input.placeholder + ' не заполнено');
    }

    if (validity.patternMismatch) {
      errors.push('Неверный формат заполнения');
    }
		if (validity.rangeOverflow) {
      let max = getAttributeValue(input, 'max');
			errors.push('Максимальное значение не может быть больше, чем ' + max);
    }
    if (validity.rangeUnderflow) {
      let min = getAttributeValue(input, 'min');
			errors.push('Минимальное значение не может быть больше, чем ' + min);
    }
		//И остальные проверки валидности...
}

//Проверка для всех полей
function checkAll() {
		//Получаем все инпуты
    errors = [];
    let inputs = document.querySelectorAll("input");

		//Перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

		//Выводим ошибки в div
  document.getElementById('errorsInfo').innerHTML=
  errors.join(' . <br>');
}


//проверка почты
function ValidateEmail(emailField) {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (emailField.value.match(mailFormat)) {
      return true;
  } else {
      console.log("Ваш адрес электронной почты введён неверно!");
      return false;
  }
}
