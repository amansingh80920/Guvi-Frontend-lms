document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        let valid = true;

        if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            valid = false;
        } else {
            clearError('email');
        }

        if (password.length < 6) {
            showError('password', 'Password must be at least 6 characters long.');
            valid = false;
        } else {
            clearError('password');
        }

        if (password !== confirmPassword) {
            showError('confirmPassword', 'Passwords do not match.');
            valid = false;
        } else {
            clearError('confirmPassword');
        }

        if (valid) {
            registerForm.submit();
            alert('Form submitted!');
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(fieldId + 'Error');
        field.classList.add('is-invalid');
        error.textContent = message;
        error.style.display = 'block';
    }

    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(fieldId + 'Error');
        field.classList.remove('is-invalid');
        error.textContent = '';
        error.style.display = 'none';
    }
});
