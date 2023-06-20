const form = document.querySelector('#form')
const email = document.querySelector('.email')
const small = document.querySelector('.small')

form.addEventListener('submit', checkEmail)


function checkEmail(e) {
    const emailValue = email.value.trim();
    const validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailValue === "") {
        e.preventDefault()
        errorMsg(email, 'Valid email required');
        return;
    } 
    else if (!emailValue.match(validEmailPattern)) {
        e.preventDefault()
        errorMsg(email, 'Valid email required');
        return;
    }
        successMsg(email);  
}


function errorMsg(input, message) {
    const form = document.querySelector('input').parentElement;
    const small = form.querySelector('.small')

    form.classList.add('error');
    small.innerText = message
}

function successMsg(input) {
    const form = document.querySelector('input').parentElement;
    form.classList.add('success');
}

