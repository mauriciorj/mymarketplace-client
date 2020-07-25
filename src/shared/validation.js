const validation = (value, rules, min, max) => {

    let check = null;

    if (rules === "email") {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(value)) {
            check = true
        } else {
            check = 'Please insert your email.'
        }
    }

    if (rules === "city") {
        check = true
    }

    if (rules === "addressLineOne") {
        check = true
    }

    if (rules === "addressLineTwo") {
        check = true
    }

    if (rules === "zipCode") {
        check = true
    }

    if (rules === "passordLogin") {
        check = true
    }

    if (rules === "password") {

        const patternNumber = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$/;

        if (value.length <= min) {
            check = 'Your email must have more than ' + min + ' characters.';
        } else if (value.length >= max) {
            check = 'Your email must have less than ' + max + ' characters.';
        } else if (!patternNumber.test(value)) {
            check = 'Your password doesn\'t match with all rules.';
        } else {
            check = true
        }

    }

    if (rules === "firstName") {

        const patternNumber = /^(?=.*?[0-9]).*$/;

        if (value.length <= min) {
            check = 'Your first name have more than ' + min + ' characters.';
        } else if (value.length >= max) {
            check = 'Your first name have less than ' + max + ' characters.';
        } else if (patternNumber.test(value)) {
            check = 'Your name can\'t have digit.';
        } else {
            check = true
        }
    }

    if (rules === "lastName") {

        const patternNumber = /^(?=.*?[0-9]).*$/;

        if (value.length <= min) {
            check = 'Your first name have more than ' + min + ' characters.';
        } else if (value.length >= max) {
            check = 'Your first name have less than ' + max + ' characters.';
        } else if (patternNumber.test(value)) {
            check = 'Your name can\'t have digit.';
        } else {
            check = true
        }
    }

    if (rules === "mobileOne") {

        const patternNumber = /^(?=.*?[A-z]).*$/;

        if (value.length === 0) {
            check = 'Please insert a phone number.';
        } else if (value.length <= min) {
            check = 'Please insert a valid number.';
        } else if (patternNumber.test(value)) {
            check = 'Your name can\'t contain a letter.';
        } else {
            check = true
        }
    }

    if (rules === "mobileTwo") {

        const patternNumber = /^(?=.*?[A-z]).*$/;

        if (value.length === 0) {
            check = 'Please insert a phone number.';
        } else if (value.length <= min) {
            check = 'Please insert a valid number.';
        } else if (patternNumber.test(value)) {
            check = 'Your name can\'t contain a letter.';
        } else {
            check = true
        }
    }

    if (rules === "mobileThree") {

        const patternNumber = /^(?=.*?[A-z]).*$/;

        if (value.length === 0) {
            check = 'Please insert a phone number.';
        } else if (value.length <= min) {
            check = 'Please insert a valid number.';
        } else if (patternNumber.test(value)) {
            check = 'Your name can\'t contain a letter.';
        } else {
            check = true
        }
    }

    return check;

}

export default validation;