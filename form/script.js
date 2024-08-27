const form = document.getElementById('Register');
const userName = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if (userNameVal === '') {
        success = false;
        setError(userName, 'Username is required');
    } else {
        setSuccess(userName);
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Email is invalid');
    } else {
        setSuccess(email);
    }

    if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }

    if (passwordVal !== cpasswordVal) {
        success = false;
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }

    if (success) {
        // Handle form submission successfully here
        console.log('Form submitted successfully!');
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.textContent = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.textContent = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}