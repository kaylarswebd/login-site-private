const signupForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('You are signed up, now log in!');
            window.location.href = '/'
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupForm);