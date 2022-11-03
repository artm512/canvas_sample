let canvas, ctx;

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

  // canvasのエリアを指定（画面全体）
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // #canvas の背景色を変更（CSSでもできるよ）
  canvas.style.backgroundColor = '#222';
}

/**
 * 描画処理
 */
function draw() {

  /**
   * 塗りつぶし: stroke
   */
  // 色の指定
  ctx.strokeStyle = '#fff';

  // 図形の区切りをつける: beginPath()
  // ここから新しい図形描画が始まる印
  ctx.beginPath();
  // 四角形を描く: rect(startX, startY, width, height)
  ctx.rect(100, 100, 100, 100);
  // 線として描画する: stroke()
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(200, 200, 100, 100);
  ctx.stroke();


  /**
   * 塗りつぶし: fill
   */
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.rect(100, 400, 100, 100);
  // 塗りつぶしで描画する: fill()
  ctx.fill();
  ctx.beginPath();
  // fillRect() で rect + fill
  ctx.fillRect(200, 500, 100, 100);

  /**
   * 円の描画
   */
  ctx.strokeStyle = '#fff';
  ctx.beginPath();
  // 円を描く: arc(centerX, centerY, radius(半径), startAngle, endAngle, anti-clock-wise(反時計回りフラグ))
  ctx.arc(1000, 200, 100, 0, Math.PI * 2);
  ctx.stroke();
  // 塗りつぶしの円
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(1200, 200, 100, 0, Math.PI * 2);
  ctx.fill();

  /**
   * save / restore
   */
  ctx.strokeStyle = '#fff';
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI*2); // キャンバスの中心点に配置
  ctx.stroke();
  // ===
  ctx.save();
  ctx.strokeStyle = '#0fa'; // 線の色を変更
  ctx.lineWidth = 10; // ラインの太さを変更
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 150, 0, Math.PI*2); // キャンバスの中心点に配置
  ctx.stroke();
  ctx.restore();
  // ===
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 200, 0, Math.PI*2); // キャンバスの中心点に配置
  ctx.stroke();


  /**
   * 楕円の描画: ellipse
   */
  ctx.strokeStyle = '#0fa';
  ctx.beginPath();
  // 楕円の傾きを指定
  ctx.ellipse(canvas.width/2, canvas.height/2, 150, 50, Math.PI/2, 0, Math.PI*2);
  ctx.stroke();

  /**
   * 線の描画
   */
  ctx.strokeStyle = '#fff';
  ctx.fillStyle = '#00f';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(500, 500);
  ctx.lineTo(700, 300); // 線が結ばれていく
  ctx.closePath(); // パスが閉じられて三角形が生まれる
  ctx.fill();
  ctx.stroke();

  /**
   * テキストの描画
   * strokeText('文字', X座標, Y座標)
   */
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#0fa';
  ctx.font = '80px Candara'; // フォントサイズ、フォントファミリー
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeText('hello', 300, 300);
  ctx.fillText('canvas', 300, 500);
}


/**
 * NOTE: canvas で注意すべきこと
 * 
 * - 原点の位置 => 左上
 * - 図形単位でbeginPathを記述すること
 * - save/restore で囲まれた部分は スタイルがクローズされる
 * - テキストがどのような位置関係で描画されているか
 *   - 基準点が テキストの左下になる（デフォルト）
 */
