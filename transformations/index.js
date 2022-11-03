let canvas, ctx, animationId, lastTime, fps, interval;
let angle;

setup();
animate(0);

window.addEventListener('resize', () => {
  setup();
  animate(0);
})

// window.addEventListener('click', () => {
//   if(animationId){
//     cancelAnimationFrame(animationId);
//     // animationIdをnullに戻す必要がある
//     animationId = null;
//   } else {
//     animate();
//   }
// })

/**
 * canvasエリアの初期設定
 */
function setup() {
  // canvasを紐付けるDOM を取得
  canvas = document.querySelector('#canvas');

  // 2dコンテキスト を取得
  // 描画のためのメソッド・プロパティを持っている
  ctx = canvas.getContext('2d')

  // #canvas の背景色を変更（CSSでもできるよ）
  canvas.style.backgroundColor = '#222';

  // canvasのエリアを指定（画面全体）
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#fff';

  // 原点をcanvasの中心にする
  ctx.translate(canvas.width/2, canvas.height/2);

  animationId = null;
  lastTime = 0;

  // アニメーションのコマ割りの数
  fps = 30; // frame per second
  interval = 1000 / fps; // ms

  angle = 0;
}

/**
 * 描画処理
 */
function draw() {
  // translateSample();
  // rotateSample();
  // scaleSample();
  transformationSample();
}

/**
 * 描画を更新する
 */
function update(){
  angle += 0.05;
}

/**
 * アニメーションする
 */
function animate(timestamp){
  // console.log(timestamp);
  if(timestamp - lastTime > interval){
    ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height); // 座標を真ん中に移した分クリアする範囲も移動
    draw();
    update();
    lastTime = timestamp;
  }

  // 繰り返し実行する（60回/秒）
  animationId = requestAnimationFrame(animate);
}

function drawArrow() {
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.font = '120px monospace';
  ctx.fillText('→', 300, 0);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(300, 0);
  ctx.stroke();
}

function translateSample(){
  ctx.save(); // 必須
  ctx.translate(100, 100);
  drawArrow();
  ctx.translate(200, 200);
  drawArrow();
  ctx.restore(); // 必須

  ctx.save(); // 必須
  ctx.fillStyle = '#0fa';
  ctx.translate(200, 200);
  drawArrow();
  ctx.restore(); // 必須
}

function rotateSample() {
  ctx.save();// 必須
  ctx.translate(canvas.width/2, canvas.height/2);
  drawArrow();
  ctx.rotate(Math.PI/6);
  drawArrow();
  ctx.rotate(Math.PI/6);
  drawArrow();
  ctx.beginPath();
  ctx.arc(-300, 0, 50, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();// 必須
}

function scaleSample() {
  ctx.save();// 必須
  ctx.translate(canvas.width/2, canvas.height/2);
  drawArrow();
  ctx.rotate(Math.PI);
  ctx.scale(1, 5);
  drawArrow();
  ctx.restore();// 必須
}

function transformationSample(){
  ctx.save();
  ctx.rotate(angle);
  ctx.translate(300*Math.sin(angle/2), 300);
  ctx.scale(Math.sin(angle*3) + 1, Math.cos(angle) + 1)
  ctx.fillRect(-50, -50, 100, 100);
  ctx.restore();
}