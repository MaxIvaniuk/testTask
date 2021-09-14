"use strict";

var numReg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    mailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nameReg = /^[а-яА-ЯёЁa-zA-Z]+$/,
    messgReg = /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
    form = document.getElementById('contactForm'),
    alertMsg = document.querySelector('.alert');
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
} // also form sending with XML request
// form.onsubmit = (e) => {
//     e.preventDefault();
//     let formData = new FormData(form);
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", form.action, true);
//     xhr.onload = (e) => {
//       if (xhr.status === 200) {
//       } else {
//         alert('Something went wrong please try again');
//       }
//     };
//     xhr.send(formData);
// setTimeout(function(){
//   form.reset();
// },3500);
// }