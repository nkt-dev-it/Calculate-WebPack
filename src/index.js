import "./style.css";
let current = "0";
let previous = null;
let operation = null;
let shouldReset = false;


const display = document.getElementById("display");
 
function updateDisplay() {
    display.textContent = current;

    const length = current.length;

    if (length > 9) {
        display.style.fontSize = "32px";
    } else if (length > 6) {
        display.style.fontSize = "48px";
    } else {
        display.style.fontSize = "64px";
    }
}

function pressDigit(value) {
    if (shouldReset) {

        if (value === ".") {
            current = "0.";
        } else {
            current = value;
        }

        shouldReset = false;
        updateDisplay();
        return;
    }

    if (value === "." && current.includes(".")) return;

    if (value === "." && current === "0") {
        current = "0.";
        updateDisplay();
        return;
    }

    if (current === "0") {
        current = value;
    } else {
        current = current + value;
    }

    updateDisplay();
}

function pressClear() {
    current = "0";
    previous = null;
    operation = null;
    shouldReset = false;
    updateDisplay();
}

function pressSign() {
    current = String(-parseFloat(current));
    updateDisplay();
}
 
function pressPercent() {
    current = String(parseFloat(current)/100);
    updateDisplay();
}

function pressOperation(op) {
    previous = parseFloat(current);
    operation = op;
    shouldReset = true;
}

function pressEquals() {
    if (!operation || previous === null) return;
    const a = previous;
    const b = parseFloat(current);
    let result;

    if (operation === "+") result = a + b;
    if (operation === "-") result = a - b;
    if (operation === "*") result = a * b;
    if (operation === "/") {
    if (b === 0) {
        current = "Error";
        updateDisplay();
        operation = null;
        previous = null;
        shouldReset = true;
        return;
    }
    result = a / b;
}

    current = String(
        parseFloat(
            result.toFixed(10)
        )
    );

    operation = null;
    previous = null;
    shouldReset = true;

    updateDisplay();
}
 
document.getElementById('btn-clear').addEventListener('click', pressClear);
 
document.getElementById('btn-sign').addEventListener('click', pressSign);
 
document.getElementById('btn-percent').addEventListener('click', pressPercent);
 
document.getElementById('btn-divide').addEventListener('click', function() {
    pressOperation('/');
});
 
document.getElementById('btn-7').addEventListener('click', function() {
    pressDigit('7');
});
 
document.getElementById('btn-8').addEventListener('click', function() {
    pressDigit('8');
});
 
document.getElementById('btn-9').addEventListener('click', function() {
    pressDigit('9');
});
 
document.getElementById('btn-multiply').addEventListener('click', function() {
    pressOperation('*');
});
 
document.getElementById('btn-4').addEventListener('click', function() {
    pressDigit('4');
});
 
document.getElementById('btn-5').addEventListener('click', function() {
    pressDigit('5');
});
 
document.getElementById('btn-6').addEventListener('click', function() {
    pressDigit('6');
});
 
document.getElementById('btn-minus').addEventListener('click', function() {
    pressOperation('-');
});
 
document.getElementById('btn-1').addEventListener('click', function() {
    pressDigit('1');
});
 
document.getElementById('btn-2').addEventListener('click', function() {
    pressDigit('2');
});
 
document.getElementById('btn-3').addEventListener('click', function() {
    pressDigit('3');
});
 
document.getElementById('btn-plus').addEventListener('click', function() {
    pressOperation('+');
});
 
document.getElementById('btn-0').addEventListener('click', function() {
    pressDigit('0');
});
 
document.getElementById('btn-dot').addEventListener('click', function() {
    pressDigit('.');
});
 
document.getElementById('btn-equals').addEventListener('click', pressEquals);
