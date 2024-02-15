const display = document.getElementById("display");


function appendtoDisplay(digit) {
    if(display.value == "ERROR") display.value = "";
    display.value += digit;
}

function cleardisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        if (display.value == Infinity) throw new Error();
    }
    catch (error) {
        display.value = "ERROR"
    }
}