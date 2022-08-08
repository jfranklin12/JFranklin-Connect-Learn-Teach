const signUpHandler = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();

    const password = document.getElementById('password').value.trim();

    const email = document.getElementById('email').value.trim();



    console.log(username);
    console.log(password);
    console.log(email);
};

document.getElementById('signup-submit').addEventListener('click', signUpHandler);
