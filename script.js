const submitBtn = document.querySelector("#button");

const iconErrorName = document.querySelector("#iconErrorName");
const textErrorName = document.querySelector("#textErrorName");
const iconErrorSurname = document.querySelector("#iconErrorSurname");
const textErrorSurname = document.querySelector("#textErrorSurname");
const iconErrorEmail = document.querySelector("#iconErrorEmail");
const textErrorEmail = document.querySelector("#textErrorEmail");
const iconErrorPassword = document.querySelector("#iconErrorPassword");
const textErrorPassword = document.querySelector("#textErrorPassword");

const validateName = function () {
  let inputName = document.forms["claim"]["fname"].value;
  if (inputName == "") {
    iconErrorName.classList.remove("hidden");
    textErrorName.classList.remove("hidden");
  } else {
    iconErrorName.classList.add("hidden");
    textErrorName.classList.add("hidden");
  }
};

const validateSurname = function () {
  let inputSurname = document.forms["claim"]["fsurname"].value;
  if (inputSurname == "") {
    iconErrorSurname.classList.remove("hidden");
    textErrorSurname.classList.remove("hidden");
  } else {
    iconErrorSurname.classList.add("hidden");
    textErrorSurname.classList.add("hidden");
  }
};

const validateEmail = function () {
  let inputEmail = document.forms["claim"]["femail"].value;
  if (inputEmail == "" || inputEmail.includes("@") == false) {
    iconErrorEmail.classList.remove("hidden");
    textErrorEmail.classList.remove("hidden");
  } else {
    iconErrorEmail.classList.add("hidden");
    textErrorEmail.classList.add("hidden");
  }
};

const validatePassword = function () {
  let inputPassword = document.forms["claim"]["fpassword"].value;
  if (inputPassword == "") {
    iconErrorPassword.classList.remove("hidden");
    textErrorPassword.classList.remove("hidden");
  } else {
    iconErrorPassword.classList.add("hidden");
    textErrorPassword.classList.add("hidden");
  }
};

const validateForm = function () {
  validateName();
  validateSurname();
  validateEmail();
  validatePassword();
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});
