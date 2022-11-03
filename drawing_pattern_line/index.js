import { Lint } from './lint.js';
let canvas, ctx, lints;

setup();
draw();

window.addEventListener('resize', () => {
  setup();
  draw();
})

window.addEventListener('click', e => {
  // console.log(e);
  erase(e.clientX, e.clientY);
  // 対象のインスタンスを削除する
  lints.forEach((lint) => {
    lint.update(e.clientX, e.clientY);
    lints = lints.filter(lint => !lint.isErased);
  })
})

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

  // lintsを作成
  lints = createLints(10);
  // console.log(lints);
}

/**
 * 描画処理
 */
function draw() {
  lints.forEach((lint) => {
    lint.draw();
  });
}

/**
 * 折線を生成する
 */
function createLints(num) {
  const lints = [];
  for(let i = 0; i < num; i++){
    const lint = new Lint(canvas, ctx);
    lints.push(lint);
  }
  return lints;
}

/**
 * 削除する
 */
function erase(x, y){
  // 四角形の形にクリアする
  // - clearRect(四角形の左上のx座標, 四角形の左上のy座標, 四角形の幅, 四角形の高さ)
  // インスタンス自体は削除されない
  ctx.clearRect(x, y, 50, 50); 
}