const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

let x = 0;
let y = 0;

let speedX = 1;
let speedY = 1;

let colors = ["red", "blue", "green", "yellow"];
let i = 0;
let color = "red";

myCanvas.addEventListener("click", function() {
    i++;

    if (i >= colors.length) {
        i = 0;
    }

    color = colors[i];
});

function animate() {
    ctx.clearRect(0, 0, 600, 400);
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 50, 50);

    x += speedX;
    y += speedY;

    if (x + 50 > 600 || x < 0) {
        speedX = -speedX;
    }

    if (y + 50 > 400 || y < 0) {
        speedY = -speedY;
    }

    requestAnimationFrame(animate);
}

animate();
