// User logout request
const userLogout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('Logout failed, please try again!')
    }
};

document.querySelector('#logout-btn')
    .addEventListener('click', userLogout);