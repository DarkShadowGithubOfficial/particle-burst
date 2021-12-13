let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor(centerX, centerY) {
    this.x = centerX + Math.random() * 10 - 5;
    this.y = centerY + Math.random() * 10 - 5;
    this.dx = Math.random() * 4 - 2;
    this.size = 7.5;
    this.dy = Math.random() * 4 - 2;
  } draw() {
    ctx.beginPath();
    ctx.fillStyle = 'hsl(' + currentHue + ', 100%, 50%)';
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  } update() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
let currentHue = 0;
let particles = [];
function init() {
  for (let i = 0; i < 2; i++) {
    let centX = Math.random() * canvas.width;
    let centY = Math.random() * canvas.height;
    particles.push(new Particle(centX, centY));
  }
}
function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  init();
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  currentHue++;
  requestAnimationFrame(animate);
}
animate();
