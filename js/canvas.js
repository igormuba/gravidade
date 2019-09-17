const canvas = document.querySelector("canvas");
const canvasDiv = document.querySelector("#canvasDiv");
const ballDataForm = document.querySelector("#ballDataForm");

console.log(canvasDiv.innerWidth);
const c = canvas.getContext("2d");

canvas.width = canvasDiv.offsetWidth;
canvas.height = window.innerHeight - ballDataForm.offsetHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
let friction = 0.9;

// Event Listeners
// addEventListener("mousemove", event => {
//   mouse.x = event.clientX;
//   mouse.y = event.clientY;
// });

addEventListener("resize", () => {
  canvas.width = canvasDiv.offsetWidth;
  canvas.height = window.innerHeight - ballDataForm.offsetHeight;

  init();
});

// addEventListener("click", function() {
//   init();
// });

// Objects
function Object(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.radius = radius;
  this.color = color;
}

Object.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.stroke();
  c.closePath();
};

Object.prototype.update = function() {
  if (this.y + this.radius + this.dy >= canvas.height) {
    this.dy = -this.dy * friction;
  } else {
    this.dy += gravity;
  }
  if (
    this.x + this.radius + this.dx > canvas.width ||
    this.x - this.radius <= 0
  ) {
    this.dx = -this.dx * friction;
  }
  this.y += this.dy;
  this.x += this.dx;
  this.draw();
};

// Implementation
let objects;
let ball;
let ballArray = [];
let ballAmount = 1;
let gravity = 1;

function init() {
  ballArray = [];
  for (let i = 0; i < ballAmount; i++) {
    let radius = getRandomInt(8, 30);
    let x = getRandomInt(radius, canvas.width - radius);
    let y = getRandomInt(radius, canvas.height - radius);
    let dx = getRandomInt(-2, 2);
    let dy = getRandomInt(-2, 2);
    let color = colors[getRandomInt(0, 3)];
    ballArray.push(new Object(x, y, dx, dy, radius, color));
  }
  ball = new Object(canvas.width / 2, canvas.height / 2, 2, 30, "red");
  objects = [];

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
  ballArray.forEach(ball => {
    ball.update();
  });
}

init();
animate();
