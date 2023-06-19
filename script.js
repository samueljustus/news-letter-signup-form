const form = document.querySelector('#form')
const email = document.querySelector('.email')
const small = document.querySelector('.small')
const button = document.querySelector('.btn')

button.addEventListener('click', (e) => {
   e.preventDefault();

   checkEmail();
})


function checkEmail() {
    const emailValue = email.value.trim();
    const validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailValue === "") {
         errorMsg(email, 'Valid email required');
    } 
    else if (!emailValue.match(validEmailPattern)) {
        errorMsg(email, 'Valid email required');
    } else {
        successMsg(email);

    }   
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

