
// function ValidatePassword(e) {
//     e.preventDefault();
//     const passwordField = form.elements.password;
//     const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
//     if (passwordField.value.match(passwordFormat)) {
//         console.log("Ваш адрес электронной почты введён верно!")
//         return true;
//     } else {
//         console.log("Ваш адрес электронной почты введён неверно!");
//         return false;
//     }
// }

//предотвращаем отправку поля до правильного заполнения
function handleFormSubmit(event) {
event.preventDefault();
console.log('sent');
}

const form = document.forms.form;
form.addEventListener('submit', handleFormSubmit);

function checkValidity(input) {
let validity = input.validity;
let errorElement = document.createElement('span');
if (validity.valueMissing) {
    let div = document.getElementById('name');
    input.classList.add('error');
    errorElement.textContent = 'Поле ' + input.placeholder + ' не заполнено';
    div.append(errorElement);
}
// if (validity.patternMismatch) {
    // let div2 = document.getElementById('email');
//     input.classList.add('error');
//     errorElement.textContent = 'Неверный формат заполнения';
//     div2.append(errorElement);
// }
if (validity.rangeOverflow) {
    let div3 = document.getElementById('age');
    input.classList.add('error');
    errorElement.textContent = 'Значение превосходит максимально допустимое';
    div3.append(errorElement);
}
if (validity.rangeUnderflow) {
    let div4 = document.getElementById('age');
    input.classList.add('error');
    errorElement.textContent = 'Значение меньше минимально допустимого';
    div4.append(errorElement);
    }
}

//Проверка для всех полей
function checkAll() {
		//Получаем все инпуты
    let inputs = document.querySelectorAll("input");
		//Перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

}

const btn = form.elements.button;
btn.addEventListener('click', checkAll);