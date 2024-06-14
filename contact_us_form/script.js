
let form = document.querySelector(".js-contact-form");
let firstName = document.getElementById("fName");
let firstNameError = document.getElementById("firstNameError");
let lastName = document.getElementById("lName");
let lastNameError = document.getElementById("lastNameError");
let email = document.getElementById("emailInput");
let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailError = document.getElementById("emailError");
let emailValidationError = document.getElementById("emailValidationError");
let radiobutton1 = document.getElementById("generalEnquiry");
let radiobutton2 = document.getElementById("supportRequest");
let queryError = document.getElementById("queryError");
let messageField = document.getElementById("messageField");
let messageError = document.getElementById("messageError");
let checkbox = document.getElementById("consentCheckbox");
let checkboxError = document.getElementById("checkboxError");
let successMessage = document.querySelector(".success-message");


form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    if (firstName.value === "") {
        firstNameError.style.display = "block";
        firstName.setAttribute("data-error", true)
    }

    else if (firstName.value !== "") {
        firstNameError.style.display = "none";
        firstName.setAttribute("data-error", false)
    }

    if (lastName.value === "") {
        lastNameError.style.display = "block";
        lastName.setAttribute("data-error", true)
    }

    else if (lastName.value !== "") {
        lastNameError.style.display = "none";
        lastName.setAttribute("data-error", false)
    }

    if (email.value === "") {
        emailError.style.display = "block";
        email.setAttribute("data-error", true)
    }

    else if (email.value !== "") {
        emailError.style.display = "none";
    }

    if (email.value !== "" && !emailValidation.test(email.value) ) {
        emailValidationError.style.display = "block";
        }

    else if (emailValidation.test(email.value)) {
        emailValidationError.style.display = "none";
        email.setAttribute("data-error", false)
    }

    if (messageField.value === "") {
        messageError.style.display = "block";
        messageField.setAttribute("data-error", true)
    }

    else if (messageField.value !== "") {
        messageError.style.display = "none";
        messageField.setAttribute("data-error", false)
    }

    if (!checkbox.checked) {
        checkboxError.style.display = "block";
    }

    else if (checkbox.checked) {
        checkboxError.style.display = "none";
        successMessage.style.display = "block";
    }
}