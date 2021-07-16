// const Joi = require('joi');
// window.FontAwesomeConfig = {
//     searchPseudoElements: true
// }

const registerBtn = document.getElementById('user-register');
const errorMsgs = document.querySelectorAll('.form-error');

registerBtn.addEventListener('click', () => validateRegister())

function validateRegister() {
    console.log('sumbit');
    // Validate every field, 'Submit' when all passed.
    let pass = true;
    errorMsgs.forEach((err) => err.innerHTML = "")

    // Username
    let username = document.getElementById('username').value;
    let usernameErr = document.getElementById('error-username');

    if(!/\w{4,}/.test(username)) {
        // Case Error
        if(!username)
            usernameErr.innerHTML = "Username cannot be blank"
        else if(username.length < 4)
            usernameErr.innerHTML = "Username must be at least 4 characters long"
        else if(!/\w+/.test(username))
            usernameErr.innerHTML = "Username must consist only letters or numbers "

        document.getElementById('username').classList.add('invalid');

        pass = false;
    } else {
        // Case Correct - clear error message & styling
        usernameErr.innerHTML = '';
        document.getElementById('username').classList.remove('invalid');
    }

    // Email
    let email = document.getElementById('email').value;
    let emailErr = document.getElementById('error-email');

    if(!/\w+@[A-Za-z]+(?=\.com|\.org|.net)/.test(email)){
        // Case Error
        if(!email)
            emailErr.innerHTML = "Email cannot be blank"
        else
            emailErr.innerHTML = "Email is invalid"
        
        document.getElementById('email').classList.add('invalid');

        pass = false
    }
    else{
        // Case Correct - clear error message & styling
        emailErr.innerHTML = '';
        document.getElementById('email').classList.remove('invalid');
    }

    // Password
    let pw = document.getElementById('pw').value;
    let pwErr = document.getElementById('error-pw')

    if(!/(?=.*[A-Z].*).+/.test(pw)){
        // Case Error
        if(!pw)
            pwErr.innerHTML = "Password cannot be blank"
        else if(!/(?=.*[A-Z].*).+/.test(pw))
            pwErr.innerHTML = "Password should include a capital letter"
        else if(pw.length < 8)
            pwErr.innerHTML = "Password must be at least 8 characters long"

        document.getElementById('pw').classList.add('invalid');

        passed = false;
    } else {
        // Case Correct - clear error message & styling
        pwErr.innerHTML = '';
        document.getElementById('pw').classList.remove('invalid');
    }
    
    // Confirm Password
    let pwConfirm = document.getElementById('confirm-pw');
    let pwConfirmErr = document.getElementById('error-confirm-pw')

    if(pw !== pwConfirm.value || !pwConfirm){
        pwConfirm.value = "";
        pwConfirmErr.innerHTML = "Please insert the same password again"
        document.getElementById('confirm-pw').classList.add('invalid');

        passed = false;
    } else {
        // Case Correct - clear error message & styling
        pwConfirmErr.innerHTML = '';
        document.getElementById('confirm-pw').classList.remove('invalid');
    }

    if(passed)
        console.log('passed!')
}

