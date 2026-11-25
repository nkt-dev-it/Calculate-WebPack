// const print = require("./test.js"); // записали фукнцию print из файла text.js
// const {print, setAlert, pi} = require("./test.js");

// import print from "./test.js";
// import {print, setAlert, pi} from "./test.js"
import './style.css';
import Image from "./every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg";
import { printMe } from './print.js';

console.log(Image);

function addElement() {
    document.body.innerHTML += `
    <header>
        <a href="" class="logo"></a>
        <h1>Hello world</h1>
        <img src="${Image}">
        <h1>Hello world</h1>
    </header>`;
        
}

addElement();

const sum = 1 + 3;
console.log(sum);


for (let index = 0; index < 100; index++) {
    console.log(index);
}
printMe();


// print("test data");
// setAlert(pi);