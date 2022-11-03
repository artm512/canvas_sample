let canvas, ctx, animationId, lastTime, fps, interval;
let numOfCols; // カラムの数
let barWidth; // 棒グラフの幅
let marginX; // 左右の余白（左右を合計した余白）
let values; // 各カラムの値をもつarray（グラフの高さ）

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

  // -- 独自定義 --
  numOfCols = 300;
  barWidth = Math.floor(canvas.width / numOfCols);
  marginX = canvas.width - barWidth * numOfCols;
  values = new Array(numOfCols).fill(0);
  
}

/**
 * 描画処理
 */
function draw() {
  drawBar();
}

/**
 * 描画を更新する
 */
function update(){
  updateValue(100, 20);
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

function pickUpIndex(rep){
  let total = 0;
  // const value1 = Math.random();
  // const value2 = Math.random();
  // total = value1 + value2;
  // const average = total/2; // 中心値になる確率が高い
  for(let i = 0; i < rep; i++){
    total += Math.random();
  }
  const average = total / rep;

  const index = Math.floor(average * numOfCols);
  return index
}

function updateValue(num, rep){
  for(let i = 0; i < num; i++){
    const index = pickUpIndex(rep);
    values[index] += 1;
  }
}

function drawBar(){
  for(let i = 0; i < numOfCols; i++){
    const barHeight = values[i];
    ctx.beginPath();
    ctx.fillRect(marginX/2 + barWidth * i, canvas.height, barWidth, -barHeight);
  }
}