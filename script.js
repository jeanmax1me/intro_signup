// Get a reference to the form
const form = document.querySelector("form");

// Get a reference to the submit button div
const submitButton = document.getElementById("submitButton");

// Add click event listener to the submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Validate the form fields
  if (validateForm()) {
    form.submit(); // Submit the form if it's valid
  }
});

// Function to validate the form fields
function validateForm() {
  let isValid = true;

  // Validate each form field
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Check if any input field is empty
  if (firstNameInput.value.trim() === "") {
    displayErrorMessage(firstNameInput, "First Name cannot be empty");
    isValid = false;
  } else {
    removeErrorMessage(firstNameInput);
  }

  if (lastNameInput.value.trim() === "") {
    displayErrorMessage(lastNameInput, "Last Name cannot be empty");
    isValid = false;
  } else {
    removeErrorMessage(lastNameInput);
  }

  if (emailInput.value.trim() === "") {
    displayErrorMessage(emailInput, "Email Address cannot be empty");
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    displayErrorMessage(emailInput, "Looks like this is not an email");
    isValid = false;
  } else {
    removeErrorMessage(emailInput);
  }

  if (passwordInput.value.trim() === "") {
    displayErrorMessage(passwordInput, "Password cannot be empty");
    isValid = false;
  } else {
    removeErrorMessage(passwordInput);
  }

  return isValid;
}

// Function to display error message for a specific input field
function displayErrorMessage(input, message) {
  const errorElement = document.createElement("p");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  const formField = input.parentElement;
  formField.appendChild(errorElement);
}

// Function to remove error message for a specific input field
function removeErrorMessage(input) {
  const formField = input.parentElement;
  const errorElement = formField.querySelector(".error-message");
  if (errorElement) {
    formField.removeChild(errorElement);
  }
}

// Function to validate the conformity of the email format 
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
