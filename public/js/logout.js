const logoutHandler = async () => {
    console.log('button click');
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};
document.getElementById('logout').addEventListener('click', logoutHandler);