// Login request
const loginForm = async (event) => {
    event.preventDefault()

    const email = document.querySelector('#login-email').value.trim().toLowerCase();
    const password = document.querySelector('#login-password').value.trim().toLowerCase();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        })

        if (response.ok) {
            document.location.replace('/')
            alert('Login successful!')
        } else if (response.status === 400) {
            alert('Incorrect email or password, please try again!')
        } else {
            alert('Login failed, please try again!')
        }
    } else {
        alert('Please enter an email and password to login!')
    }
};

document.querySelector('#login-form')
    .addEventListener('submit', loginForm);
