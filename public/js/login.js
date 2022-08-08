const signUpHandler = async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();

    const email = document.getElementById('email').value.trim();

    const password = document.getElementById('password').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
    }
};

document.getElementById('signup-submit').addEventListener('click', signUpHandler);
