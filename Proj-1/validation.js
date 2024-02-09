const errorDiv = document.getElementById("errorDisplay");

function validatePasswords(passwordInput, repeatInput) {
    let password = passwordInput.value;
    let passwordCheck = repeatInput.value;

    if (password.toLowerCase() !== passwordCheck.toLowerCase()) {
        errorDiv.textContent = "Error: passwords do not match. Make sure both password inputs match!"
        return false;
    }

    errorDiv.textContent = "";
    return true;
}               

function termsCheck(termsInput) {
    if(!termsInput.checked) {
        errorDiv.textContent = "Error: You must agree to Terms of Use before you can proceed."
        return false;
    } else {
        errorDiv.textContent = "";
        return true;
    }
}

function validateLoginUsername(nameInput) {
    let username = nameInput.value;
    if (username === "") {
        errorDiv.textContent = "Error - the Username cannot be blank."
        return false;
    }
    errorDiv.textContent = "";
    return true;
}

function validateLoginPassword(passwordInput) {
    let password = passwordInput.value;
    if (password === "") {
        errorDiv.textContent = "Error - the Password musr be entered."
        return false;
    }
    errorDiv.textContent = "";
    return true;
}

export { validatePasswords, termsCheck, validateLoginPassword, validateLoginUsername };