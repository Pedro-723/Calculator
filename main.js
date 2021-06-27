const buttons = document.querySelectorAll('button')

const display = document.querySelector('.display');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate)
})

function calculate(event) {
    // current clicked buttons value

    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        // clear everything on display
        display.value = '';
    } else {
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
    }


}


function sum(a, b) {
    return a + b;
}

function subs(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b > 0 || b < 0) {
        return a / b;
    } else {
        return "Wait, that's illegal"
    };
}