// Get form elements
const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const errorMessages = document.getElementsByClassName('error-message');

// Add event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  // Remove existing error messages
  removeErrorMessages();

  // Check if any field is empty
  if (isEmpty(firstNameInput.value)) {
    displayErrorMessage(firstNameInput, 'First Name cannot be empty');
  }

  if (isEmpty(lastNameInput.value)) {
    displayErrorMessage(lastNameInput, 'Last Name cannot be empty');
  }

  // Check email format
  if (!isValidEmail(emailInput.value)) {
    displayErrorMessage(emailInput, 'Looks like this is not an email');
  }

  // Check if any error message is displayed
  if (errorMessages.length === 0) {
    form.submit(); // Submit the form if no errors
  }
});

// Function to check if a field is empty
function isEmpty(value) {
  return value.trim() === '';
}

// Function to check email format
function isValidEmail(email) {
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to display error message
function displayErrorMessage(inputElement, message) {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;
  inputElement.parentElement.appendChild(errorMessage);
}

// Function to remove existing error messages
function removeErrorMessages() {
  while (errorMessages.length > 0) {
    errorMessages[0].remove();
  }
}
