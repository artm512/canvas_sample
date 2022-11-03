let canvas, ctx, animationId, lastTime, fps, interval;

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

  animationId = null;
  lastTime = 0;

  // アニメーションのコマ割りの数
  fps = 30; // frame per second
  interval = 1000 / fps; // ms
}

/**
 * 描画処理
 */
function draw() {
  // 処理を記述
}

/**
 * 描画を更新する
 */
function update(){
  // 処理を記述
}

/**
 * アニメーションする
 */
function animate(timestamp){
  // console.log(timestamp);
  if(timestamp - lastTime > interval){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    update();
    lastTime = timestamp;
  }

  // 繰り返し実行する（60回/秒）
  animationId = requestAnimationFrame(animate);
}