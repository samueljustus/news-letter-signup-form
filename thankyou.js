const thankYouMsg = document.querySelector('.thankyou-msg');
const boldText = document.querySelector('.bold')
const params = new URLSearchParams(window.location.search);  // queryString returns an object

params.forEach((value, key) => {
    thankYouMsg.innerHTML = `A confirmation email has been sent to ${value} 
                            Please open it and click the button inside to confirm your subscription.`
 })

