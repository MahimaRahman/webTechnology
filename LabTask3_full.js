const handleContinue = () => {
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementsByName("amount");
    const interestedCondition = document.getElementById("interestedCondition");
    const creditCard = document.getElementById("credit-card").value;
    const month = document.getElementById("month").value;
    const password = document.getElementById("password").value;
    const donation = document.getElementsByName("donation");
    const checkboxesAdditional = document.querySelectorAll('input[name="additionalChk[]"]:checked');
    const checkboxesContact = document.querySelectorAll('input[name="contact[]"]:checked');
    const checkboxesEvent = document.querySelectorAll('input[name="event[]"]:checked');
    const anonymous = document.getElementById("anonymous");

    if (state === "" || country === "") {
        alert("Please select a state and country.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email (only gmail.com allowed).");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must be at least 8 characters long, and include an uppercase letter, a digit, and a special character (!@#$%&*()_+)");
        return false;
    }

    if (!isSelected(amount)) {
        alert("Please select a donation amount.");
        return false;
    }

    if (!interestedCondition.checked) {
        alert("Please check the 'Recurring Donation' box if interested.");
        return false;
    }

    if (creditCard === "" || month === "") {
        alert("Please fill in Monthly Credit Card and Month.");
        return false;
    }

    if (!isSelected(donation)) {
        alert("Please select a donation option (To honor / In memory).");
        return false;
    }

    if (!getCheckedValues(checkboxesAdditional)) {
        alert("Please select at least one additional option.");
        return false;
    }

    if (!getCheckedValues(checkboxesContact)) {
        alert("Please select at least one contact option.");
        return false;
    }

    if (!getCheckedValues(checkboxesEvent)) {
        alert("Please select at least one event option.");
        return false;
    }

    
    if (!anonymous.checked) {
        alert("Please select the anonymous option if you wish to remain anonymous.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

const isSelected = (elements) => {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            return true;
        }
    }
    return false;
}

const isValidEmail = (email) => {
    if (email.includes("@")) {
        const [localPart, domainPart] = email.split("@");
        return localPart.length > 0 && domainPart === "gmail.com";
    }
    return false;
}

const getCheckedValues = (checkboxes) => {
    const values = Array.from(checkboxes).map(cb => cb.value);
    return values.length > 0;
}

const isValidPassword = (password) => {
    if (password.length < 8) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasSpecial = false;
    let hasNumber = false;

    const specialChars = "!@#$%&*()_+[]{}|<>?/";

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= 'a' && char <= 'z') hasLower = true;
        else if (specialChars.includes(char)) hasSpecial = true;
        else if (char >= '0' && char <= '9') hasNumber = true;

        if (hasUpper && hasLower && hasSpecial && hasNumber) return true;
    }

    return hasUpper && hasLower && hasSpecial && hasNumber;
}

const checkEmail = () => {
    const email = document.getElementById("email").value;
    const element = document.getElementById("error-email");
    
    if (!isValidEmail(email)) {
        element.textContent = "Please enter a valid email (only gmail.com allowed).";
        element.style.color = "red";
        
    }
    else {
       
        element.innerHTML = "";
        element.style.color = "black";
    }   
    
    
}

const checkPassword = () => {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error-password");
    if (!isValidPassword(password)) {
        errorElement.textContent = "Password must be at least 8 characters long, and include an uppercase letter, a digit, and a special character (!@#$%&*()_+)";
        errorElement.style.color = "red";
    } else {
        errorElement.textContent = "";
        errorElement.style.color = "black";
    }
}


