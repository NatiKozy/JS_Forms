const form = document.forms.form;

const userName = form.elements.name;
function checkName(userName) {
    const rightName = userName.value.trim();
    const divName = document.getElementById('name');
    if (rightName === "") {
        const error = document.createElement('span');
        userName.classList.add('error');
        error.textContent = 'Введите имя'
        divName.append(error);
        return false;
    } else {
        return true;
    }
};

const userEmail = form.elements.email;
function checkEmail(userEmail) {
    const rightEmail = userEmail.value;
    const divEmail = document.getElementById('email');
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (rightEmail.match(mailFormat)) {
        return true;
    } else if (rightEmail.value === '') {
        const error = document.createElement('span');
        userEmail.classList.add('error');
        error.textContent = 'Введите email'
        divEmail.append(error);
        return false;
    } else {
        const error = document.createElement('span');
        userEmail.classList.add('error');
        error.textContent = 'Введите корректный email'
        divEmail.append(error);
        return false;
    }
};


const userAge = form.elements.age;
function checkAge(userAge) {
    const divAge = document.getElementById('age');
    if (userAge.value === "") {
        const error = document.createElement('span');
        userAge.classList.add('error');
        error.textContent = 'Введите возраст'
        divAge.append(error);
        return false;
    } else {
        return true;
    }
};

const password = form.elements.password;
function checkPassword(password) {
    const divPassword = document.getElementById('password');
    const rightPassword = password.value;
    const correctPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (rightPassword.match(correctPassword)) {
        return true;
    } else {
        const error = document.createElement('span');
        password.classList.add('error');
        error.textContent = 'Введите корректный пароль'
        divPassword.append(error);
        return false;
    }
};

const repeatPassword = form.elements.repeatpassword;
function checkPasswords(password, repeatpassword) {
    const divCheckPassword = document.getElementById('password-check');
    if (password.value === repeatpassword.value) {
        return true;
    } else {
        const error = document.createElement('span');
        repeatPassword.classList.add('error');
        error.textContent = 'Пароли не совпадают';
        divCheckPassword.append(error);
        return false;
    }
};

const checkbox = form.elements.checkbox;
function checkAgreement(checkbox) {
    const divCheckbox = document.getElementById('checkbox');
    if (checkbox.checked) {
        return true;
    } else {
        const error = document.createElement('span');
        checkbox.classList.add('error');
        error.textContent = 'Ознакомьтесь с условиями';
        divCheckbox.append(error);
        return false;
    }
};

function checkValidity() {
    if (checkName(userName) === false ||
        checkAge(userAge) === false ||
        checkEmail(userEmail) === false ||
        checkPassword(password) === false ||
        checkPasswords(password, repeatPassword) === false ||
        checkAgreement(checkbox) === false) {
        document.getElementById('errorsInfo').textContent = 'Заполните все поля';
        return false;
    } else {
        form.reset();
        return true;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkName(userName);
    checkEmail(userEmail);
    checkAge(userAge);
    checkPassword(password);
    checkPasswords(password, repeatPassword);
    checkAgreement(checkbox);
    if (checkValidity() === true) {
        const div = document.getElementById('errorsInfo');
        const text = document.createElement('p');
        div.textContent = 'Регистрация завершена';
        div.append(text);
    }
});

