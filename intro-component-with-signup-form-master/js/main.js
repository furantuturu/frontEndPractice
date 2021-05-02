const [fName, lName, email, pWord] = [document.querySelector('#fname'), document.querySelector('#lname'), document.querySelector('#email'), document.querySelector('#password')]
const form = document.querySelector('#form');


const inputValues = {
    fNameValue: fName.value.trim(),
    lNameValue: lName.value.trim(),
    emailValue: email.value.trim()
}

form.addEventListener('submit', function(e) {
    let error = [];
    if (inputValues.fNameValue.length <= 0) {
        error.push(fName);
    }
    if (inputValues.lNameValue.length <= 0) {
        error.push(lName);
    }
    if (inputValues.emailValue.length <= 0 || !isEmail(inputValues.emailValue)) {
        error.push(email);
    }
    if (pWord.value.trim().length <= 0) {
        error.push(pWord);
    }

    if (error.length > 0) {
        e.preventDefault();

        error.forEach(err => {
            addErrorClass(err);
        })
    }
});

//add .error class to send error message
const addErrorClass = (input) => {
    const inputParent = input.parentElement;

    inputParent.classList.add('error');
}

// email validation
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}