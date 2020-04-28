console.log('this is canvas-resize tutuorial');



let canvas = document.querySelector('canvas');
// // console.log(canvas);
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

let c = canvas.getContext('2d');

let colorArray = [
    '#9400D3',
    '#480082',
    '#0000FF',
    '#00FF00',
    '#FFFF00',
    '#FF7F00',
    '#FF0000'

]

const mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
})

window.addEventListener('click', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    // console.log(mouse);
})

function circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * 7)];

    this.draw = function () {
        // console.log('circle drawn');
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
       
    }
    this.update = function () {
        //for interacting.

        if (mouse.x - this.x < 100 && mouse.y - this.y < 100 && mouse.x - this.x > -100 && mouse.y-this.y >-100) {
            if (this.radius < 40) {
                this.radius += 1;
            }
        } else if (this.radius > 3) {
            this.radius -= 1;
            // console.log('deep', mouse.x - this.x);

        }
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();

    }
}
let circleArray = [];
for (let i = 0; i < 800; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;
    let radius = 10;
    // let newcircle = new circle(200, 200, 50, 1, 1);
    circleArray.push(new circle(x, y, radius, dx, dy));

}

// circle1.draw();


function animate() {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;
    let radius = 1;
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    // newcircle.update();
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();

    }
    // console.log('animation start');
    c.beginPath();
    c.fillStyle = 'red';
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = `red`;
    c.stroke();



    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = - dy;
    }
    x += dx;
    y += dy;

}
animate();
