new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    add (inc) {
      this.age += inc;
    },
    substract (dec) {
      this.age -= dec;
    },
    updateXY (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click () {
      console.log('You clicked a link');
    }
  }
});
