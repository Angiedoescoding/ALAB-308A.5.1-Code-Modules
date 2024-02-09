// This module is for submissions handling

import { validateLoginPassword, termsCheck } from "./validation.js";

const errorDiv = document.getElementById("errorDisplay");
const formRegister = document.getElementById("registration");
const nameRegister = formRegister.elements["username"]; 
const passwordRegister = formRegister.elements["password"];
const passwordRepeat = formRegister.elements["passwordCheck"];
const email = formRegister.elements["email"]
const terms = formRegister.elements["terms"];

function registrationFormSubmission(ev) {
    ev.preventDefault();

    if (nameRegister && email && validatePasswords(passwordRegister, passwordRepeat) && termsCheck(terms)) {
    const user = {
        username: nameRegister.value.toLowerCase(),
        email: email.value.toLowerCase(),
        password: passwordRegister.value
    };
    console.log(user)

    localStorage.setItem(user.username, JSON.stringify(user));
        console.log("Data is stored.")
    formRegister.reset();
    errorDiv.textContent = "The registration was successful! Check your email to see registration credentials.";
    }
}

function loginFormSubmission(ev) {              
    ev.preventDefault();

const formLogin = document.getElementById("login");
const nameLogin = formLogin.elements["username"];
const keepMeIn = formLogin.elements["persist"];
const passLogin = formLogin.elements["password"];

    if (nameLogin && passLogin && validateLoginUsername(nameLogin) && validateLoginPassword(passLogin)) { 
        console.log("Credentials entered successfully.")
        formLogin.reset()          

        if (keepMeIn.checked) {
            errorDiv.textContent = "Logged in. The 'Keep me logged in.' option was enabled."
        } else {
            errorDiv.textContent = "Logged in successfully."
        }
    }
    //console.log(loginFormSubmission(ev))
}

export { registrationFormSubmission, loginFormSubmission }
