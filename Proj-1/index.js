import {registrationFormSubmission, loginFormSubmission} from './form-handlier.js'

const formRegister = document.getElementById("registration");
const formLogin = document.getElementById("login");

formRegister.addEventListener("submit", registrationFormSubmission);
formLogin.addEventListener("submit", loginFormSubmission);



// This file is now the MAIN file where I'd import all the necessery functions ans set up event listeners!

// ==============================================


// Copy from the previous lab:

// const errorDiv = document.getElementById("errorDisplay");
// const formRegister = document.getElementById("registration");
// const nameRegister = formRegister.elements["username"]; // both forms have it the same
// const passwordRegister = formRegister.elements["password"];
// const passwordRepeat = formRegister.elements["passwordCheck"];
// const email = formRegister.elements["email"]
// const terms = formRegister.elements["terms"];
// //console.log(errorDiv,formRegister,nameRegister,passwordRegister, passwordRepeat)

// const formLogin = document.getElementById("login");
// const nameLogin = formLogin.elements["username"];
// const keepMeIn = formLogin.elements["persist"];
// const passLogin = formLogin.elements["password"]
// //console.log(terms, formLogin, nameLogin, keepMeIn)

// function displayError(errorMssg, inputElement) {
//     errorDiv.textContent = errorMssg;
//     inputElement.focus();
// }


//     function validatePasswords() {
//         let password = passwordRegister.value;
//         let passwordCheck = passwordRepeat.value;

//         if (password.toLowerCase() !== passwordCheck.toLowerCase()) {
//             errorDiv.textContent = "Error: passwords do not match. Make sure both password inputs match!"
//             return false;
//         }

//         errorDiv.textContent = "";
//         return true                 // clear error if passwords match
//     }

//     function termsCheck() {
//         if(!terms.checked) {
//             errorDiv.textContent = "Error: You must agree to Terms of Use before you can proceed."
//             return false;
//         } else {
//             errorDiv.textContent = "";
//             return true;
//         }
//     }
//     function registrationFormSubmission(ev) {
//         ev.preventDefault();

//         if (nameRegister && email && validatePasswords() && termsCheck()) {
//         const user = {
//             username: nameRegister.value.toLowerCase(),
//             email: email.value.toLowerCase(),
//             password: passwordRegister.value
//     };
//         console.log(user)
//     localStorage.setItem(user.username, JSON.stringify(user));
//         console.log("Data is stored.")
//     formRegister.reset();
//     errorDiv.textContent = "The registration was successful! Check your email to see registration credentials.";
//     }
// }

// formRegister.addEventListener("submit", registrationFormSubmission)

//     function validateUsernameRegistForm() {
//         if (username = "") {
//             errorDiv.textContent = "Error: the Username can not be blank.";
//             return false;
//         }

//         let RegisteredUsernames = Object.keys(localStorage);
//         if (RegisteredUsernames.includes(username)) {
//             errorDiv.textContent = "Error: this username is already in use. Please use another name.";
//             return false;
//         } else {
//             errorDiv.textContent = "";
//             return true;
//         }
//     }
//     console.log(validateUsernameRegistForm());


// function validateLoginUsername (){
//     let username = nameLogin.value;
//     if (username = ""){
//         errorDiv.textContent = "Error: the Username can not be blank.";
//         return false;
//     }
//     errorDiv.textContent = "";
//         return true;
//     }

// function validateLoginPassword() {
//     let password = passLogin.value;
//     if (password = ""){
//         errorDiv.textContent = "Error: the password must be entered."
//         return false;
//     }
//     errorDiv.textContent = "";
//     return true;
// }
//     const validateStoredData = JSON.parse(localStorage.getItem(nameLogin.value.toLowerCase()));  // to local copy and the name in lower case
//         if (!validateStoredData || validateStoredData.password !== password) {    // if stored name or stored password don't match/incorrect, show the error
//             errorDiv.textContent = "Entered data does not match. Check Username and/or password again.";
//         }    
//         errorDiv.textContent = "";              // otherwise, show no error and proceed


// function loginFormSubmission(ev) {              
//     ev.preventDefault();
//     if (validateLoginUsername() && validateLoginPassword()) {   // whether login name and password entered pass through
//         console.log("Credentials entered successfully.")
//         formLogin.reset()           // if login name and password entered pass through, clear the form

//         // Moving to the "Keep me logged in" part
//         if (keepMeIn.checked) {
//             errorDiv.textContent = "Logged in. The 'Keep me logged in.' option was enabled."
//         } else {
//             errorDiv.textContent = "Logged in successfully."
//         }
//     }
//     console.log(loginFormSubmission(ev))
// }

// formLogin.addEventListener("submit", loginFormSubmission)

// console.log(formLogin.loginFormSubmission)        