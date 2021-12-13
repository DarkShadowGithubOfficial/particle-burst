var canvas = document.querySelector('#canvas');
var btn = document.querySelector('#btn');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor(centerX, centerY, color) {
    this.color = color;
    this.x = centerX + Math.random() * 10 - 5;
    this.y = y + centerY + Math.random() * 10 - 5;
    this.dx = Math.random() * 4 - 2;
    this.size = Math.random() * 5 + 5;
    this.dy = Math.random() * 4 - 2;
  } draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill
  } update() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
let currentHue = 0;
var particles = [];
function init(index) {
  for (let i = 0; i < index; i++) {
    let centX = Math.random() * canvas.width;
    let centY = Math.random() * canvas.height;
    particles.push(new Particle(centX, centY, 'hsl(' + currentHue + ', 100%, 50%)'));
  }
}
btn.addEventListener('click', () => {
  init(6);
})
function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  requestAnimationFrame(animate);
}
animate();
