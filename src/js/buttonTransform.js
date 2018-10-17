/* 
    ES6 features used, need to be transpiled using babel-loader
*/
import { secretButton, secretContent } from './main';


export const hideCaption = () => {
    secretButton.innerText = "Hide Content";
}

export const showCaption = () => {
    secretButton.innerText = "Show Content";
}
