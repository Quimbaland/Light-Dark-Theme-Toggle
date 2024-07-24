// "use strict";

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    console.log('Button clicked');
    document.body.classList.toggle('dark');
});