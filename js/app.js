function genaretPin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
function getPin() {
    const pin = genaretPin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin(); // jodi 4 na hoy tahole abar function colbe 
    }
}

document.getElementById('btn_genaret_pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display_pin');
    displayPin.value = getPin();
})
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    if (isNaN(number)) {
        // console.log(number);
    } else {
        const typedNumberField = document.getElementById('typed_number');
        const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})
document.getElementById('varify_pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display_pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed_number');
    const typedNumber = typedNumberField.value;

    const successMessage = document.getElementById('success_message')
    const failureMessage = document.getElementById('failure_message')
    if (typedNumber === currentPin) {
        successMessage.style.display = 'block'
        failureMessage.style.display = 'none'
    } else {
        failureMessage.style.display = 'block'
        successMessage.style.display = 'none'
    }
})