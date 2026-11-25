"use strict";
(self["webpackChunkmodelfrontend"] = self["webpackChunkmodelfrontend"] || []).push([[57],{

/***/ 173
() {


// import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
let current = "0"; // число на экране прямо сейчас
let previous = null; // число до того, как нажали операцию
let operation = null; // выбранная операция
let shouldReset = false; // true = следующая цифра начнёт новое число // false = цифра должна дописаться к текущему числу


const display = document.getElementById("display");
 
// Функция, которая обновляет текст на экране
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

// ─── ФУНКЦИИ
// ВВОД ЦИФР или запятой
function pressDigit(value) {
    // Если только что нажали операцию — начинаем новое число
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

    // Нельзя поставить вторую точку
    if (value === "." && current.includes(".")) return;

    // Если на экране 0 и нажали точку
    if (value === "." && current === "0") {
        current = "0.";
        updateDisplay();
        return;
    }

    // Обычный ввод цифр
    if (current === "0") {
        current = value;
    } else {
        current = current + value;
    }

    updateDisplay();
}

// Нажата кнопка AC — сбрасываем всё до заводских настроек
function pressClear() {
    current = "0";
    previous = null;
    operation = null;
    shouldReset = false;
    updateDisplay();
}

// +/- — меняем знак числа
function pressSign() {
    current = String(-parseFloat(current)); // parseFloat(current) - возвращает число, -  знак, меняет число (было -25, будет -(-25), значит +25) и обратно в строку
    updateDisplay();
}
 
// Нажата кнопка % — делим на 100
function pressPercent() {
    current = String(parseFloat(current)/100);
    updateDisplay();
}
 
// Пользователь нажал одну из операций (+, -, ×, ÷)
function pressOperation(op) {
    previous = parseFloat(current); // число на экране
    operation = op; // (+, -, ×, ÷)
    shouldReset = true; // после операции вводим новое число
}

// Результат
function pressEquals() {
    // если ничего не нажато или 0, то... ничего
    if (!operation || previous === null) return;

    // выражение:
    const a = previous;
    const b = parseFloat(current);
    let result; // здесь пока нет значения, потому что нет никаких расчетов
    // console.log(result);

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

    // Округляем до 10 знаков
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

// ─── addEventListener
// На каждую кнопку свой обработчик клика
 
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


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(173));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQjtBQUNyQjtBQUNBLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLHlCQUF5Qjs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVsZnJvbnRlbmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBDc3NNaW5pbWl6ZXJQbHVnaW4gZnJvbSBcImNzcy1taW5pbWl6ZXItd2VicGFjay1wbHVnaW5cIjtcbmxldCBjdXJyZW50ID0gXCIwXCI7IC8vINGH0LjRgdC70L4g0L3QsCDRjdC60YDQsNC90LUg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YFcbmxldCBwcmV2aW91cyA9IG51bGw7IC8vINGH0LjRgdC70L4g0LTQviDRgtC+0LPQviwg0LrQsNC6INC90LDQttCw0LvQuCDQvtC/0LXRgNCw0YbQuNGOXG5sZXQgb3BlcmF0aW9uID0gbnVsbDsgLy8g0LLRi9Cx0YDQsNC90L3QsNGPINC+0L/QtdGA0LDRhtC40Y9cbmxldCBzaG91bGRSZXNldCA9IGZhbHNlOyAvLyB0cnVlID0g0YHQu9C10LTRg9GO0YnQsNGPINGG0LjRhNGA0LAg0L3QsNGH0L3RkdGCINC90L7QstC+0LUg0YfQuNGB0LvQviAvLyBmYWxzZSA9INGG0LjRhNGA0LAg0LTQvtC70LbQvdCwINC00L7Qv9C40YHQsNGC0YzRgdGPINC6INGC0LXQutGD0YnQtdC80YMg0YfQuNGB0LvRg1xuXG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XG4gXG4vLyDQpNGD0L3QutGG0LjRjywg0LrQvtGC0L7RgNCw0Y8g0L7QsdC90L7QstC70Y/QtdGCINGC0LXQutGB0YIg0L3QsCDRjdC60YDQsNC90LVcbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGN1cnJlbnQ7XG5cbiAgICBjb25zdCBsZW5ndGggPSBjdXJyZW50Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiA5KSB7XG4gICAgICAgIGRpc3BsYXkuc3R5bGUuZm9udFNpemUgPSBcIjMycHhcIjtcbiAgICB9IGVsc2UgaWYgKGxlbmd0aCA+IDYpIHtcbiAgICAgICAgZGlzcGxheS5zdHlsZS5mb250U2l6ZSA9IFwiNDhweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXkuc3R5bGUuZm9udFNpemUgPSBcIjY0cHhcIjtcbiAgICB9XG59XG5cbi8vIOKUgOKUgOKUgCDQpNCj0J3QmtCm0JjQmFxuLy8g0JLQktCe0JQg0KbQmNCk0KAg0LjQu9C4INC30LDQv9GP0YLQvtC5XG5mdW5jdGlvbiBwcmVzc0RpZ2l0KHZhbHVlKSB7XG4gICAgLy8g0JXRgdC70Lgg0YLQvtC70YzQutC+INGH0YLQviDQvdCw0LbQsNC70Lgg0L7Qv9C10YDQsNGG0LjRjiDigJQg0L3QsNGH0LjQvdCw0LXQvCDQvdC+0LLQvtC1INGH0LjRgdC70L5cbiAgICBpZiAoc2hvdWxkUmVzZXQpIHtcblxuICAgICAgICBpZiAodmFsdWUgPT09IFwiLlwiKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gXCIwLlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvdWxkUmVzZXQgPSBmYWxzZTtcbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g0J3QtdC70YzQt9GPINC/0L7RgdGC0LDQstC40YLRjCDQstGC0L7RgNGD0Y4g0YLQvtGH0LrRg1xuICAgIGlmICh2YWx1ZSA9PT0gXCIuXCIgJiYgY3VycmVudC5pbmNsdWRlcyhcIi5cIikpIHJldHVybjtcblxuICAgIC8vINCV0YHQu9C4INC90LAg0Y3QutGA0LDQvdC1IDAg0Lgg0L3QsNC20LDQu9C4INGC0L7Rh9C60YNcbiAgICBpZiAodmFsdWUgPT09IFwiLlwiICYmIGN1cnJlbnQgPT09IFwiMFwiKSB7XG4gICAgICAgIGN1cnJlbnQgPSBcIjAuXCI7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vINCe0LHRi9GH0L3Ri9C5INCy0LLQvtC0INGG0LjRhNGAXG4gICAgaWYgKGN1cnJlbnQgPT09IFwiMFwiKSB7XG4gICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudCArIHZhbHVlO1xuICAgIH1cblxuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn1cblxuLy8g0J3QsNC20LDRgtCwINC60L3QvtC/0LrQsCBBQyDigJQg0YHQsdGA0LDRgdGL0LLQsNC10Lwg0LLRgdGRINC00L4g0LfQsNCy0L7QtNGB0LrQuNGFINC90LDRgdGC0YDQvtC10LpcbmZ1bmN0aW9uIHByZXNzQ2xlYXIoKSB7XG4gICAgY3VycmVudCA9IFwiMFwiO1xuICAgIHByZXZpb3VzID0gbnVsbDtcbiAgICBvcGVyYXRpb24gPSBudWxsO1xuICAgIHNob3VsZFJlc2V0ID0gZmFsc2U7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xufVxuXG4vLyArLy0g4oCUINC80LXQvdGP0LXQvCDQt9C90LDQuiDRh9C40YHQu9CwXG5mdW5jdGlvbiBwcmVzc1NpZ24oKSB7XG4gICAgY3VycmVudCA9IFN0cmluZygtcGFyc2VGbG9hdChjdXJyZW50KSk7IC8vIHBhcnNlRmxvYXQoY3VycmVudCkgLSDQstC+0LfQstGA0LDRidCw0LXRgiDRh9C40YHQu9C+LCAtICDQt9C90LDQuiwg0LzQtdC90Y/QtdGCINGH0LjRgdC70L4gKNCx0YvQu9C+IC0yNSwg0LHRg9C00LXRgiAtKC0yNSksINC30L3QsNGH0LjRgiArMjUpINC4INC+0LHRgNCw0YLQvdC+INCyINGB0YLRgNC+0LrRg1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn1cbiBcbi8vINCd0LDQttCw0YLQsCDQutC90L7Qv9C60LAgJSDigJQg0LTQtdC70LjQvCDQvdCwIDEwMFxuZnVuY3Rpb24gcHJlc3NQZXJjZW50KCkge1xuICAgIGN1cnJlbnQgPSBTdHJpbmcocGFyc2VGbG9hdChjdXJyZW50KS8xMDApO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn1cbiBcbi8vINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdCw0LbQsNC7INC+0LTQvdGDINC40Lcg0L7Qv9C10YDQsNGG0LjQuSAoKywgLSwgw5csIMO3KVxuZnVuY3Rpb24gcHJlc3NPcGVyYXRpb24ob3ApIHtcbiAgICBwcmV2aW91cyA9IHBhcnNlRmxvYXQoY3VycmVudCk7IC8vINGH0LjRgdC70L4g0L3QsCDRjdC60YDQsNC90LVcbiAgICBvcGVyYXRpb24gPSBvcDsgLy8gKCssIC0sIMOXLCDDtylcbiAgICBzaG91bGRSZXNldCA9IHRydWU7IC8vINC/0L7RgdC70LUg0L7Qv9C10YDQsNGG0LjQuCDQstCy0L7QtNC40Lwg0L3QvtCy0L7QtSDRh9C40YHQu9C+XG59XG5cbi8vINCg0LXQt9GD0LvRjNGC0LDRglxuZnVuY3Rpb24gcHJlc3NFcXVhbHMoKSB7XG4gICAgLy8g0LXRgdC70Lgg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC20LDRgtC+INC40LvQuCAwLCDRgtC+Li4uINC90LjRh9C10LPQvlxuICAgIGlmICghb3BlcmF0aW9uIHx8IHByZXZpb3VzID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyDQstGL0YDQsNC20LXQvdC40LU6XG4gICAgY29uc3QgYSA9IHByZXZpb3VzO1xuICAgIGNvbnN0IGIgPSBwYXJzZUZsb2F0KGN1cnJlbnQpO1xuICAgIGxldCByZXN1bHQ7IC8vINC30LTQtdGB0Ywg0L/QvtC60LAg0L3QtdGCINC30L3QsNGH0LXQvdC40Y8sINC/0L7RgtC+0LzRgyDRh9GC0L4g0L3QtdGCINC90LjQutCw0LrQuNGFINGA0LDRgdGH0LXRgtC+0LJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gXCIrXCIpIHJlc3VsdCA9IGEgKyBiO1xuICAgIGlmIChvcGVyYXRpb24gPT09IFwiLVwiKSByZXN1bHQgPSBhIC0gYjtcbiAgICBpZiAob3BlcmF0aW9uID09PSBcIipcIikgcmVzdWx0ID0gYSAqIGI7XG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gXCIvXCIpIHtcbiAgICBpZiAoYiA9PT0gMCkge1xuICAgICAgICBjdXJyZW50ID0gXCJFcnJvclwiO1xuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgICAgIG9wZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHByZXZpb3VzID0gbnVsbDtcbiAgICAgICAgc2hvdWxkUmVzZXQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc3VsdCA9IGEgLyBiO1xufVxuXG4gICAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC00L4gMTAg0LfQvdCw0LrQvtCyXG4gICAgY3VycmVudCA9IFN0cmluZyhcbiAgICAgICAgcGFyc2VGbG9hdChcbiAgICAgICAgICAgIHJlc3VsdC50b0ZpeGVkKDEwKVxuICAgICAgICApXG4gICAgKTtcblxuICAgIG9wZXJhdGlvbiA9IG51bGw7XG4gICAgcHJldmlvdXMgPSBudWxsO1xuICAgIHNob3VsZFJlc2V0ID0gdHJ1ZTtcblxuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn1cblxuLy8g4pSA4pSA4pSAIGFkZEV2ZW50TGlzdGVuZXJcbi8vINCd0LAg0LrQsNC20LTRg9GOINC60L3QvtC/0LrRgyDRgdCy0L7QuSDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwXG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsZWFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmVzc0NsZWFyKTtcbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2lnbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJlc3NTaWduKTtcbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcGVyY2VudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJlc3NQZXJjZW50KTtcbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZGl2aWRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcmVzc09wZXJhdGlvbignLycpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLTcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHByZXNzRGlnaXQoJzcnKTtcbn0pO1xuIFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi04JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcmVzc0RpZ2l0KCc4Jyk7XG59KTtcbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tOScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlc3NEaWdpdCgnOScpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW11bHRpcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcmVzc09wZXJhdGlvbignKicpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLTQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHByZXNzRGlnaXQoJzQnKTtcbn0pO1xuIFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi01JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcmVzc0RpZ2l0KCc1Jyk7XG59KTtcbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tNicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlc3NEaWdpdCgnNicpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLW1pbnVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcmVzc09wZXJhdGlvbignLScpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLTEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHByZXNzRGlnaXQoJzEnKTtcbn0pO1xuIFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi0yJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBwcmVzc0RpZ2l0KCcyJyk7XG59KTtcbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tMycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlc3NEaWdpdCgnMycpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXBsdXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHByZXNzT3BlcmF0aW9uKCcrJyk7XG59KTtcbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tMCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlc3NEaWdpdCgnMCcpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWRvdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcHJlc3NEaWdpdCgnLicpO1xufSk7XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWVxdWFscycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJlc3NFcXVhbHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9