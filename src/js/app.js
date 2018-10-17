import '../css/main.css';
import '../css/button.css';
import { secretButton, secretContent } from './main.js';
import { hideCaption, showCaption } from './buttonTransform';
// import imageFile from './img/webpack-flow-for-babel-and-scss.jpg';

secretButton.addEventListener("click", toggleView);

function toggleView () {
    if(secretContent.style.display === "block" || secretContent.style.display === "") {
        secretContent.style.display = "none";
        showCaption();
    } else {
        secretContent.style.display = "block";
        hideCaption();
    }
}