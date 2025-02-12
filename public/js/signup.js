const signupForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passwordRepeat = document.querySelector('#password-repeat-signup').value.trim();
    const checkbox = document.querySelector('#checkbox-signup').checked;

    if (name && email && (password==passwordRepeat) && checkbox) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('You are signed up, now log in!');
            window.location.href = '/';
        } else {
            alert('Failed to sign up.');
        }
    } else {
        alert('Please fill out all fields and accept the terms.');
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupForm);