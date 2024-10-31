document.addEventListener('DOMContentLoaded'.function());
document.getElementById(registration-form);
document.getElementById(form-feedback);

document.addEventListener('submit');
function register(submit) {
    event.preventDefault()
};

document.getElementById(username);
document.getElementById(email);
document.getElementById(password);

const username = "username";
const email = "email";
const password = "password";

const value = username.trim();
const string = email.trim();
const str = password.trim();

var isValid = true;
let messages = [];

if (username.length<3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
}
  
if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push("Email must include both '@' and '.' characters.");
}

if (password.length>8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
}

if (isValid) {
    console.log("Validation successful!");
} else {
    console.log("Validation failed with the following messages:");
    messages.forEach(message => console.log(message));
}

function displayFeedback(isValid, messages) {
    const feedbackDiv = document.getElementById('feedbackDiv');
    feedbackDiv.style.display = 'block';

    if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
    }

}
