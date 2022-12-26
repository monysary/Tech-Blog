// New user signup request
const signUpForm = async (event) => {
    event.preventDefault();

    const signUpUser = document.querySelector('#signup-username').value.trim().toLowerCase();
    const signUpEmail = document.querySelector('#signup-email').value.trim().toLowerCase();
    const signUpPassword = document.querySelector('#signup-password').value.trim().toLowerCase();

    if (signUpUser && signUpEmail && signUpPassword) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                signUpUser,
                signUpEmail,
                signUpPassword
            })
        })

        if (response.ok) {
            alert('New user sign up successful!')
        } else {
            alert('Sign up failed, please try again!')
        }

    } else {
        alert('Please fill out the form completely!')
    }
}

document.querySelector('#signup-form')
    .addEventListener('submit', signUpForm);