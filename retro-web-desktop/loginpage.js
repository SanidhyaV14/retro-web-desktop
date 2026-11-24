function Login() {
    //IDs
    const usernameInp = document.getElementById('username');
    const passwordInp = document.getElementById('password');
    const loginError = document.getElementById('loginError');

    const Password = '1234';

    let flag = false; 

    for (let i = 0; i < Users.length; i++) {
        if (usernameInp.value === Users[i].username && passwordInp.value === Users[i].password) {
            flag = true;
            break;
        }
    }    
    if (flag === true) {
        localStorage.setItem('WebDeskUser', usernameInp.value);

        window.location.href = 'desktop.html';
        clearForm();
    } 
    else {
        loginError.style.display = 'block';
        passwordInp.value = '';
    }
}

function clearForm() {
    document.getElementById('password').value = '';
    document.getElementById('loginError').style.display = 'none';
}

document.getElementById('password').onkeypress = function(event) {
    if (event.key === 'Enter') {
        Login();
    }
};
