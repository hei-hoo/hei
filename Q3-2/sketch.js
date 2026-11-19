// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
vx = 0
let speed = 5;

if (keyIsDown(DOWN_ARROW)) {
  speed = 10;
}

if (keyIsDown(LEFT_ARROW)) {
  vx = -speed;
}

if (keyIsDown(RIGHT_ARROW)) {
  vx = speed;
}
 // BLANK[2] 重力とジャンプ
vy += g;

// 地面に着いたら止める
if (y + size / 2 >= groundY) {
  y = groundY - size / 2;
  vy = 0;
}

// スペースキーでジャンプ
if (keyIsDown(UP_ARROW) && y + size / 2 >= groundY) {
  vy = -20;
}        
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}