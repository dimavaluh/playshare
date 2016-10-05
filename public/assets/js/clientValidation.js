// Client-side validation of the Nickname and email in the registration form
function InvalidMsg(textbox) {
    if (textbox.value == '') {
        textbox.setCustomValidity('Please fill out this form');
    } else if (textbox.validity.typeMismatch) {
        textbox.setCustomValidity('Please enter a valid email address');
    } else {
        textbox.setCustomValidity('');
    }
}

// Client-side validation of the password in the registration form
function InvalidPassword(pass) {
    if(pass.value.length < 6) {
        pass.setCustomValidity('The password must contain at least 6 characters');
    }
}