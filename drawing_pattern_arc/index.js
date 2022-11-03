import { Ripple } from './ripple.js';
let canvas, ctx, ripples;

setup();
draw();

window.addEventListener('resize', () => {
  setup();
  draw();
})

setInterval(() => {
  setup();
  draw();
}, 1000);

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

  ripples = createRipples(8);
}

/**
 * 描画処理
 */
function draw() {
  ripples.forEach((ripple) => {
    ripple.draw();
  });
}

/**
 * 波紋を生成する
 */
function createRipples(num) {
  const ripples = [];
  for(let i = 0; i < num; i++){
    const ripple = new Ripple(canvas, ctx);
    ripples.push(ripple)
  }
  return ripples;
}

/**
 * MEMO
 * 
 * - アニメーションとは → 一定時間ごとに描画されるもの
 * - requrestAnimationFlame
 */