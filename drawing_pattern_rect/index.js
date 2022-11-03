let canvas, ctx, num, cellSize, gapX, gapY, topLeftX, topLeftY, innerGap;

setup();
draw();

window.addEventListener('resize', () => {
  setup();
  draw();
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

  // 線の色を指定
  ctx.strokeStyle = '#fff';

  num = 8; // cellの数
  // cellSize = canvas.height < canvas.width ? canvas.height * 8/10 / (num + 2) : canvas.width * 8/10 / (num + 2);
  // gapX = (canvas.width * 8/10 - cellSize*num) / (num - 1);
  // gapY = (canvas.height * 8/10 - cellSize*num) / (num - 1);

  if(canvas.height < canvas.width) {
    cellSize = canvas.height * 8/10 / (num + 2);
    gapY = (canvas.height * 8/10 - cellSize*num) / (num - 1);
    gapX = gapY;
    topLeftY = canvas.height/10;
    topLeftX =(canvas.width - canvas.height*8/10) / 2; 
  } else {
    cellSize = canvas.width * 8/10 / (num + 2);
    gapX = (canvas.width * 8/10 - cellSize*num) / (num - 1);
    gapY = gapX;
    topLeftX = canvas.width/10;
    topLeftY = (canvas.height - canvas.width*8/10) / 2;
  }

  innerGap = cellSize / 8;
}

/**
 * 描画処理：リロードするたびに色に変化をつける
 */
function draw() {
  // 中心に大きな長方形を描画する
  // ctx.beginPath();
  // ctx.rect(canvas.width/10, canvas.height/10, canvas.width*8/10, canvas.height*8/10);
  // ctx.stroke();

  for(let y = 0; y < num; y++) {
    for(let x = 0; x < num; x++) {
      ctx.save();
      if(Math.random() < 0.5) ctx.lineWidth = 2; // 外側の線のみ、ランダムで線を太くする
      ctx.beginPath();
      ctx.rect(topLeftX + (cellSize + gapX) * x, topLeftY + (cellSize + gapY) * y, cellSize, cellSize);
      ctx.stroke();
      ctx.restore();

      if(Math.random() < 0.5) {
        ctx.save(); // 色の指定を限定させる
        ctx.strokeStyle = `hsl(${Math.random()*360}, 100%, 50%)`; // 色をランダムにする
        ctx.beginPath();
        ctx.rect(topLeftX + innerGap + (cellSize + gapX) * x, topLeftY + innerGap + (cellSize + gapY) * y, cellSize - innerGap*2, cellSize - innerGap*2);
        ctx.stroke();
        ctx.restore();
      }

      if(Math.random() < 0.5) {
        ctx.save(); // 色の指定を限定させる
        ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`; // 色をランダムにする
        ctx.beginPath();
        ctx.rect(topLeftX + innerGap*2 + (cellSize + gapX) * x, topLeftY + innerGap*2 + (cellSize + gapY) * y, cellSize - innerGap*4, cellSize - innerGap*4);
        ctx.fill();
        ctx.restore();
      }
    }
  }
}

