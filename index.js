let app = new Vue({
  el: "#app",
  data: {
    n: 0, //入力値
    i: 1, //初期値
    a: 0,
    b: 0,
    aSqrt: 0,
    bSqrt: 0,
    dif: 0,
  },
  methods: {
    sqrt: function () {
      this.aSqrt = 0;
      this.bSqrt = 0;
      this.i = 0;
      for (this.a = this.i; this.a <= this.n; this.a += 2) {
        this.aSqrt += Math.sqrt(this.a);
      }
      for (this.b = this.i + 1; this.b <= this.n; this.b += 2) {
        this.bSqrt += Math.sqrt(this.b);
      }
      this.dif = this.aSqrt - this.bSqrt;
    },
    enter: function () {
      if (window.event.keyCode == 13) {
        this.sqrt();
      }
    },
  },
});
