/*

email, country, zipcode, password and password confirmation

live inline validation. use input event listener

make inputs in div{label, input, span} format

email needs to be checked if it has valid domain after @ symbol

country should be taken from a list

zipcode should be checked based on country rules---

just check based on usa rules, no need to complicate

var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("90210");

password and password confirmation must match

*/

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const country = document.getElementById("country");
const countryError = document.getElementById("country-error");
const zipcode = document.getElementById("zipcode");
const zipcodeError = document.getElementById("zipcode-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const passwordConfirm = document.getElementById("password-confirm");
const passwordConfirmError = document.getElementById("password-confirm-error");

function validateZipcode() {
  if (zipcode.value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
    zipcodeError.textContent = "";
    return true;
  }
  zipcodeError.textContent = "Please enter a valid zipcode!";
  return false;
}

function validateEmail() {
  if (
    email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.textContent = "";
    return true;
  }
  emailError.textContent = "Please enter a valid email!";
  return false;
}

function validateCountry() {
  if (country.value !== "select country") {
    countryError.textContent = "";
    return true;
  }
  countryError.textContent = "Please select a country!";
  return false;
}

function validatePassword() {
  if (password.value !== "") {
    passwordError.textContent = "";
    return true;
  }
  passwordError.textContent = "Please enter a password!";
  return false;
}

function validatePasswordConfirm() {
  if (passwordConfirm.value === password.value) {
    passwordConfirmError.textContent = "";
    return true;
  }
  passwordConfirmError.textContent = "Passwords must match!";
  return false;
}

email.addEventListener("input", validateEmail);

country.addEventListener("input", validateCountry);

zipcode.addEventListener("input", validateZipcode);

password.addEventListener("input", validatePassword);

passwordConfirm.addEventListener("input", validatePasswordConfirm);

form.addEventListener("submit", (event) => {
  if (
    validateEmail() &
    validateCountry() &
    validateZipcode() &
    validatePassword() &
    validatePasswordConfirm()
  ) {
  }
  event.preventDefault();
});
