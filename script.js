const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'violet', 'pink', 'yellow', 'blue', 'green', 'purple']

body.style.background = 'hotpink';

button.addEventListener('click', changeBack);

function changeBack() {
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}