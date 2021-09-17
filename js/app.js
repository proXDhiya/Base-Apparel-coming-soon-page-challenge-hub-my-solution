'use strict';

// validate check function
const validate = function(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// selectors
const email = document.querySelector('input[type="email"]');
const btn = document.querySelector('input[type="submit"]');
const errorMsg = document.querySelector('.error-msg');

// click event
btn.addEventListener(
    'click', function() {
        if (!validate(email.textContent)) {
            errorMsg.classList.add('error-none');
            email.classList.remove('error');
        }
        else {
            errorMsg.classList.remove('error-none');
            email.classList.add('error');
        }
    }
);
