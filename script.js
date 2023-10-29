let number = document.querySelector('span')
let interval = setInterval(function() {
    number.style.color = getRandomColor()
    number.innerHTML++;
    if (number.innerHTML == '100') {
        clearInterval(interval);
        number.innerHTML += " lvl";
        number.style.fontSize = "100px";
    }
    if (number > 100) {
        clearInterval(interval);
    }
}, 50);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}