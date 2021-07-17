const registerBtn = document.getElementById('user-register');
const errorMsgs = document.querySelectorAll('.form-error');
const password = document.getElementById('pw');

// registerBtn.addEventListener('submit', () => validateRegister())
pw.addEventListener('input', function(){passwordCriteriaCheck(this.value)})

function validateRegister() {
    console.log('sumbit');
    // Validate every field, 'Submit' when all pass.
    let pass = true;
    errorMsgs.forEach((err) => err.innerHTML = "")

    // Username
    let username = document.getElementById('username').value;
    let usernameErr = document.getElementById('error-username');

    if(!/^[A-Za-z0-9]{4,}$/.test(username)) {
        // Case Error
        if(!username)
            usernameErr.innerHTML = "Username cannot be blank"
        else if(username.length < 4)
            usernameErr.innerHTML = "Username must be at least 4 characters long"
        else if(!/^[A-Za-z0-9]+$/.test(username))
            usernameErr.innerHTML = "Username must consist only letters or numbers "

        document.getElementById('username').parentElement.classList.add('invalid');

        pass = false;
    } else {
        // Case Correct - clear error message & styling
        usernameErr.innerHTML = '';
        document.getElementById('username').parentElement.classList.remove('invalid');
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
        
        document.getElementById('email').parentElement.classList.add('invalid');

        pass = false
    }
    else{
        // Case Correct - clear error message & styling
        emailErr.innerHTML = '';
        document.getElementById('email').parentElement.classList.remove('invalid');
    }

    // Password
    let pw = document.getElementById('pw').value;
    let pwErr = document.getElementById('error-pw')

    if(!/(?=.*[A-Z].*).+(?=.*[!@#$%^&*() ].*)/.test(pw)){
        // Case Error
        if(!pw)
            pwErr.innerHTML = "Password cannot be blank"
        else if(!/(?=.*[A-Z].*).+/.test(pw))
            pwErr.innerHTML = "Password should include a capital letter"
        else if(pw.length < 8)
            pwErr.innerHTML = "Password must be at least 8 characters long"
        else
            pwErr.innerHTML = "Special character required (!@#$%^&* )"

        document.getElementById('pw').parentElement.classList.add('invalid');

        pass = false;
    } else {
        // Case Correct - clear error message & styling
        pwErr.innerHTML = '';
        document.getElementById('pw').parentElement.classList.remove('invalid');
    }
    
    // Confirm Password
    let pwConfirm = document.getElementById('confirm-pw');
    let pwConfirmErr = document.getElementById('error-confirm-pw')

    if(pw !== pwConfirm.value || !pwConfirm){
        pwConfirm.value = "";
        pwConfirmErr.innerHTML = "Please insert the same password again"
        document.getElementById('confirm-pw').parentElement.classList.add('invalid');

        pass = false;
    } else {
        // Case Correct - clear error message & styling
        pwConfirmErr.innerHTML = '';
        document.getElementById('confirm-pw').parentElement.classList.remove('invalid');
    }

    if(pass){
        registerBtn.innerHTML = "Passed";
        registerBtn.classList.add('passed');
    }
    else{
        registerBtn.innerHTML = "Submit";
        registerBtn.classList.remove('passed');
    }
}

function passwordCriteriaCheck(input) {
    // Add/remove wrong circle only, it will naturally replace the greens
    const pwCriteria = document.querySelectorAll('.pw-criteria > i')
    pwCriteria.forEach((c) => {
        // Make the circle green on default.
        c.classList.add('fa-check-circle');
        c.classList.remove('fa-times-circle');
        c.classList.remove('fa-circle');
    })

    if(input.length < 8 || !input){
        pwCriteria[0].classList.add('fa-times-circle');
        pwCriteria[0].classList.remove('fa-check-circle');
    }
    if(!/(?=.*[A-Z].*).+/.test(input)){
        pwCriteria[1].classList.add('fa-times-circle');
        pwCriteria[1].classList.remove('fa-check-circle');
    }
    if(!/(?=.*[!@#$%^&* /*-+].*).+/.test(input)){
        pwCriteria[2].classList.add('fa-times-circle');
        pwCriteria[2].classList.remove('fa-check-circle');
    }
}