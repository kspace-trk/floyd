const app = new Vue({
  el: "#app",
  data: {
    n: 0, //入力値
    a: 0,
    b: 0,
    i: 1,
    aSqrt: 0,
    bSqrt: 0,
    difA: 0,
    difB: 0,
    dif: 0,
  },
  methods: {
    sqrt: function () {
      this.aSqrt = 0;
      this.bSqrt = 0;
      this.i = 1;
      for (this.i = this.n; 1 <= this.i; this.i--) {
        this.aSqrt += Math.sqrt(this.i); //aに代入する場合
        this.difA = this.aSqrt - this.bSqrt;

        //絶対値に直す
        if (this.difA < 0) {
          this.difA *= -1;
        }
        this.bSqrt += Math.sqrt(this.i); //bに代入する場合
        this.difB = this.aSqrt - this.bSqrt;

        //絶対値に直す
        if (this.difB < 0) {
          this.difB *= -1;
        }
        if (this.difA < this.difB) {
          this.bSqrt -= Math.sqrt(this.i);
        } else if (this.difB < this.difA) {
          this.aSqrt -= Math.sqrt(this.i);
        }
      }
      this.dif = this.aSqrt - this.bSqrt;
      if (this.dif < 0) {
        this.dif *= -1;
      }
    },

    enter: function () {
      if (window.event.keyCode == 13) {
        this.sqrt();
      }
    },
  },
});
