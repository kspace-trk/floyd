const app = new Vue({
  el: "#app",
  data: {
    n: "", //入力値
    arrayA: [],
    arrayB: [],
    b: 0,
    a: 0,
    i: 1,
    aSqrt: 0,
    bSqrt: 0,
    difA: 0,
    difB: 0,
    dif: 0,
    array: [],
  },
  methods: {
    sqrt: function () {
      this.aSqrt = 0;
      this.bSqrt = 0;
      this.i = 0;
      this.a = 0;
      this.b = 0;
      for (this.i = this.n; 0 <= this.i; this.i--) {
        //////////
        this.aSqrt += Math.sqrt(this.i); //aに代入する場合
        this.difA = this.aSqrt - this.bSqrt;
        this.aSqrt -= Math.sqrt(this.i);
        //絶対値に直す
        if (this.difA < 0) {
          this.difA *= -1;
        }
        //////////
        this.bSqrt += Math.sqrt(this.i); //bに代入する場合
        this.difB = this.aSqrt - this.bSqrt;
        this.bSqrt -= Math.sqrt(this.i);

        //絶対値に直す
        if (this.difB < 0) {
          this.difB *= -1;
        }
        //////////
        //Aに入れるかBに入れるか判別する(difAとdifBが同じな場合difAに代入)
        if (this.difA <= this.difB) {
          this.aSqrt += Math.sqrt(this.i);
          this.array[this.i] = 0;
        } else if (this.difB < this.difA) {
          this.bSqrt += Math.sqrt(this.i);
          this.array[this.i] = 1;
        }
      }
      //////////
      //最終確定
      this.dif = this.aSqrt - this.bSqrt;
      if (this.dif < 0) {
        this.dif *= -1;
      }
      //////////
      //配列分別
      for (this.i = 1; this.i <= this.n; this.i++) {
        if (this.array[this.i] == 0) {
          this.arrayA[this.a] = this.i;
          this.a++;
        } else if (this.array[this.i] == 1) {
          this.arrayB[this.b] = this.i;
          this.b++;
        }
      }
    },

    enter: function () {
      if (window.event.keyCode == 13) {
        this.sqrt();
      }
    },
  },
});
