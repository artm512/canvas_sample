// クラスを定義
export class Ripple {
  // コンストラクタを定義
  // インスタンスの初期設定を行う
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.r = Math.random() * this.canvas.width/4;
  }

  // メソッドを定義
  draw(){
    this.ctx.strokeStyle = 'rgba(50, 255, 255, 0.3)';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
    this.ctx.stroke();

    this.ctx.strokeStyle = 'rgba(50, 255, 255, 0.5)';
    this.ctx.beginPath(); // MEMO: これがそれぞれにないと線が結ばれてしまう
    this.ctx.arc(this.x, this.y, this.r/3, 0, Math.PI*2, false);
    this.ctx.stroke();

    this.ctx.strokeStyle = 'rgba(50, 255, 255, 1)';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r/4, 0, Math.PI*2, false);
    this.ctx.stroke();
  }
}

/**
 * MEMO
 * 
 * - インスタンスとは
 */