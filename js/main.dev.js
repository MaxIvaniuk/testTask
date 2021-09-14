"use strict";

var numReg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    mailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nameReg = /^[а-яА-ЯёЁa-zA-Z]+$/,
    messgReg = /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
    form = document.getElementById('contactForm'),
    alertMsg = document.querySelector('.alert'),
    temp = document.querySelector('.weather_temp'),
    conditions = document.querySelector('.weather_conditions');
var userName = document.querySelector('#formName'),
    userPhone = document.querySelector('#formPhone'),
    userEmail = document.querySelector('#formMail'),
    userMessg = document.querySelector('#formMesage'),
    submitBtn = document.querySelector('#submitButton'),
    inputs = document.querySelector('.contact_form__input'); // Validation

userName.addEventListener('blur', function (e) {
  e.preventDefault();
  validate(nameReg, userName.value, userName);
});
userPhone.addEventListener('blur', function (e) {
  e.preventDefault();
  validate(numReg, userPhone.value, userPhone);
});
userEmail.addEventListener('blur', function (e) {
  e.preventDefault();
  validate(mailReg, userEmail.value, userEmail);
});
userMessg.addEventListener('blur', function (e) {
  e.preventDefault();
  validate(messgReg, userMessg.value, userMessg);
});

function validate(regex, input, target) {
  if (regex.test(input)) {
    target.classList.remove('is-invalid');
    target.classList.add('is-valid');
  } else {
    target.classList.remove('is-valid');
    target.classList.add('is-invalid');
    validateErr();
  }
}

function validateErr() {
  alertMsg.classList.remove('d-none');
  setTimeout(function () {
    alertMsg.classList.add('d-none');
  }, 3500);
} // Form send


var url = 'https://app.form2chat.io/f/2f2f414';

function postData() {
  fetch(url, {
    method: 'POST'
  }).then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    } else {
      setTimeout(function () {
        form.reset();
      }, 3500);
    }
  })["catch"](function (err) {
    console.log(err);
  });
} //weather forecast


var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=49.553516&lon=25.594767&units=metric&lang=ua&appid=2a99b17f27fec118e2c633e3b869fab7';
fetch(weatherUrl).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
  temp.innerHTML = "+".concat(Math.round(data.main.temp));
  conditions.innerHTML = data.weather[0].description;
})["catch"](function () {
  console.log('error');
}); // init animation

new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 1,
  mobile: true,
  live: true
}).init();