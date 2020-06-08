const app = new Vue({
  el: '#app',
  data: {
    n: 0,  //入力値
    i: 1,  //初期値
    a: 0,
    b: 0,
    aSqrt: 0,
    bSqrt: 0
  },
  methods:{
    sqrt:function(){
      for( this.a = this.i ; this.a <= this.n ; this.a+=2 ){
        this.aSqrt += Math.sqrt(this.a);
      }
      for( this.b = this.i + 1 ; this.b <= this.n ; this.b+=2 ){
        this.bSqrt += Math.sqrt(this.b);
      }
    }
  }
})
