function genaretPin() {
    const random = Math.round(Math.random() * 100000);
    return random;
}
function getPin() {
    const pin = genaretPin();
    const pinString = pin + '';
    console.log(pinString);
    if (pinString.length === 5) {
        return pin;
    } else {
        return getPin(); // jodi 4 na hoy tahole abar function colbe 
    }
}

document.getElementById('btn_genaret_pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display_pin');
    displayPin.value = 'S-' + getPin();
})