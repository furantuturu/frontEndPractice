const [email, form, fieldSet] = [document.querySelector('#email'), document.querySelector('#form'), document.querySelector('.input-field')]


form.addEventListener('submit', e => {
    const emailValue = email.value.trim();

    // check if email is blank
    if (emailValue.length <= 0 || !isEmail(emailValue)) {
        e.preventDefault();
        fieldSet.classList.add('error-input');
    }
})

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}