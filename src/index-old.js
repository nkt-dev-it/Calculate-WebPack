import './style.css';
import Image from "./every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg";

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
