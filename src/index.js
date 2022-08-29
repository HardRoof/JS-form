import "./style.css";

const petName = document.getElementById("pet-name");
const petsBreed = document.getElementById("pets-breed");
const petsBirthday = document.getElementById("pets-birthday");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const spanPetName = document.querySelector(".form__name > span");
const spanPetsBreed = document.querySelector(".form__breed > span");
const spanPetsBirthday = document.querySelector(".form__birthday > span");
const spanUserName = document.querySelector(".account__name > span");
const spanUserEmail = document.querySelector(".account__email > span");
const spanPassword = document.querySelector(".account__password > span");
const spanConfirmPassword = document.querySelector(".account__confirm > span");

const inputsErrors = {
  inputs: [petName, petsBreed, petsBirthday, userName, userEmail, password, confirmPassword],
  errors: [spanPetName, spanPetsBreed, spanPetsBirthday, spanUserName, spanUserEmail, spanPassword, spanConfirmPassword],
};

document.getElementsByClassName("btns__button")[0].addEventListener("click", () => {
  window.location.reload();
  window.scrollTo(0, 0); // To refresh at top of Page
});

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

function checkLength(input, error) {
  if (input === userEmail) error.textContent = `Email should be at least ${userEmail.minLength} characters.`;
  if (input === password || input === confirmPassword)
    error.textContent = `Password should be at least ${password.minLength} characters.`;
}

function showError(input, error) {
  if (input.validity.valueMissing) {
    error.textContent = "✖ This field is required.";
  } else if (input.validity.typeMismatch) {
    error.textContent = "Enter a valid e-mail address.";
  } else if (input.validity.tooShort) {
    checkLength(input, error);
  } else if (input.validity.patternMismatch) {
    error.textContent = "Please match format DD/MM/YYYY";
  } else if (password.value !== confirmPassword.value) error.textContent = "Passwords do not match. Try again.";
  error.className = "error--active";
}

function liveCheck(input, error) {
  if (input.validity.valid) {
    error.textContent = ""; // Reset to initial state
    error.className = "error";
  } else {
    showError(input, error);
  }
}

petName.addEventListener("input", () => liveCheck(petName, spanPetName));
petsBreed.addEventListener("input", () => liveCheck(petsBreed, spanPetsBreed));
petsBirthday.addEventListener("input", () => liveCheck(petsBirthday, spanPetsBirthday));
userName.addEventListener("input", () => liveCheck(userName, spanUserName));
userEmail.addEventListener("input", () => liveCheck(userEmail, spanUserEmail));
password.addEventListener("input", () => liveCheck(password, spanPassword));
confirmPassword.addEventListener("input", () => liveCheck(confirmPassword, spanConfirmPassword));

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  inputsErrors.inputs.forEach((input, index) => {
    if (!input.validity.valid || (input === confirmPassword && input.value !== password.value)) {
      const error = inputsErrors.errors[index];
      showError(input, error);
      e.preventDefault();
    }
  });
});

document.getElementsByClassName("btns__button")[0].addEventListener("click", () => {
  window.location.reload();
  window.scrollTo(0, 0); // To refresh at top of Page
});

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
