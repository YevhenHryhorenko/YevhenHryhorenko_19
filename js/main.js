const block = document.querySelector(".block")
const blockWidth = block.offsetWidth
const blockHeight = block.offsetHeight

function randColor() {
    return `rgb(${Array.from({ length: 3 }, () => Math.floor(Math.random() * 256)).join()})`;
}

function randYPosition() {
    return `${Math.floor(Math.random() * (window.innerHeight - blockHeight))}px`;
}

function randXPosition() {
    return `${Math.floor(Math.random() * (window.innerWidth - blockWidth))}px`;
}

setInterval(() => {
    block.style.backgroundColor = randColor();
}, 500);

setInterval(() => {
    block.style.top = randYPosition();
    block.style.left = randXPosition();
}, 1000);