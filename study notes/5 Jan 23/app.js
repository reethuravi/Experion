function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    // console.log('handleSubmit called');
    const email = document.forms.login.email;
    const password = document.forms.login.password;
    const age = document.forms.login.age;
    // console.log(email,password);

    const passwordErrorDisplay = password.nextElementSibling;
    const emailValue = email.value;
    const passwordValue = password.value;
    if (passwordValue.length < 6) {
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li> Password must have 6 characters</li>';    
    } 

    if(passwordValue.includes(' ')){
        passwordValue.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password should not contain space</li>';
    }
    console.log(password);
    const ageValue = age.value;
    const ageError = age.nextElementSibling;
    if(18 >= ageValue < 100){
        ageValue.style.border = '1px solid red';
        ageError.nextElementSibling.classList.remove(d-none);
        ageError.innerHTML += '<li>Age below 18 is not accepted</li>'
    } 
}