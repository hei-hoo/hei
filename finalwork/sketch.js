let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 30; i++) {
    let b = {
      x: random(width),
      y: random(height),
      size: random(3, 10),
      vx: random(-1, 1),
      vy: random(-1, 1),
      color:random(3)
    };

    balls.push(b);
  }
}

function draw() {
  background(5, 10, 35, 30);
noStroke();

for (let i = 0; i < 5; i++) {
  let y = height / 2 + sin(frameCount * 0.01 + i) * 100;

  if (i % 3 === 0) {
    fill(30, 100, 255, 15);
  } else if (i % 3 === 1) {
    fill(180, 50, 255, 15);
  } else {
    fill(255, 50, 150, 15);
  }

  ellipse(width / 2, y, width * 1.5, 180);
}
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];

    drawParticle(b);
    b.size += sin(frameCount * 0.05 + b.x) * 0.03;

    b.x += b.vx;
    b.y += b.vy;

    if (b.x < 0 || b.x > width) {
      b.vx *= -1;
    }

    if (b.y < 0 || b.y > height) {
      b.vy *= -1;
    }
  }
 // タイトル表示
fill(255, 230);
textAlign(CENTER);
textSize(32);
text("AURORA", width / 2, 60);

textSize(12);
fill(200, 200, 230, 180);
text("TOUCH THE LIGHT", width / 2, 85);
// 操作説明
textSize(13);
fill(200, 200, 230, 160);
text("DRAG YOUR MOUSE TO CREATE LIGHT", width / 2, height - 30);
}
function drawParticle(b) {
  noStroke();

  if (b.color < 1) {
    fill(50, 150, 255, 180);
  } else if (b.color < 2) {
    fill(180, 80, 255, 180);
  } else {
    fill(255, 100, 180, 180);
  }

  ellipse(b.x, b.y, b.size * 2);
  ellipse(b.x, b.y, b.size);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mouseDragged() {
  let b = {
    x: mouseX,
    y: mouseY,
    size: random(5, 15),
    vx: random(-1, 1),
    vy: random(-1, 1),
    color: random(3)
  };

  balls.push(b);
}
function mousePressed() {
  for (let i = 0; i < 20; i++) {
    let b = {
      x: mouseX,
      y: mouseY,
      size: random(5, 15),
      vx: random(-4, 4),
      vy: random(-4, 4),
      color: random(3)
    };

    balls.push(b);
  }
}
