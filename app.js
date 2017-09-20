new Vue({
  el: '#vue-app',
  data: {
    age: 30,
    a: 0,
    b: 0
  },
  methods: {
    addToA () {
      console.log('addToA run');
      return this.a + this.age;
    },
    addToB () {
      console.log('addToB run');
      return this.b + this.age;
    }
  }
});

//  even after clicking only one button (one function fired) both functions runs
//  check that out in the console
