document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
    } else {
        alert("Please correct the errors before submitting.");
    }
});

function validateName() {
    let name = document.getElementById("fullName").value;
    if (name.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters long.";
        return false;
    } else {
        document.getElementById("nameError").innerText = "";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        return false;
    } else {
        document.getElementById("emailError").innerText = "";
        return true;
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    if (phone.length !== 10 || phone === "123456789" || parseInt(phone[0]) <= 5) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number starting with a digit greater than 5.";
        return false;
    } else {
        document.getElementById("phoneError").innerText = "";
        return true;
    }
}

function validateDOB() {
    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("dobError").innerText = "Please enter your date of birth.";
        return false;
    } else {
        document.getElementById("dobError").innerText = "";
        return true;
    }
}

function validateGender() {
    let gender = document.getElementById("gender").value;
    if (!gender) {
        document.getElementById("genderError").innerText = "Please select your gender.";
        return false;
    } else {
        document.getElementById("genderError").innerText = "";
        return true;
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("fullName").value;
    if (password.length < 8 || password.toLowerCase() === "password" || password === name) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters and should not be 'password' or your name.";
        return false;
    } else {
        document.getElementById("passwordError").innerText = "";
        return true;
    }
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
        return true;
    }
}

function validateForm() {
    return validateName() & validateEmail() & validatePhone() & validateDOB() & validateGender() & validatePassword() & validateConfirmPassword();
}
