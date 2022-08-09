// Function to login
const loginHandler = async (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value.trim();

    const email = document.getElementById('login-email').value.trim();

    const password = document.getElementById('login-password').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
    }
};

document.getElementById('login-submit').addEventListener('click', loginHandler);



// Function to sign up
const signUpHandler = async (event) => {
    event.preventDefault();
    const username = document.getElementById('signup-username').value.trim();

    const email = document.getElementById('signup-email').value.trim();

    const password = document.getElementById('signup-password').value.trim();

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
