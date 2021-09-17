'use strict';

// validate check function
const validate = function(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// selectors
const email = document.querySelector('input[type="email"]');
const btn = document.querySelector('input[type="submit"]');
const errorMsg = document.querySelector('.error-msg');

// click event
btn.addEventListener(
    'click', function() {
        if (!validate(email.textContent)) {
            errorMsg.classList.remove('error-none');
            email.classList.add('error');
        }
    }
);
