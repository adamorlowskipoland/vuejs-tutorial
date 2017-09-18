new Vue({
  el:'#vue-app',
  data: {
    name: 'Shaun',
    job: 'Ninja'
  },
  methods: {
    greet (time) {
      return `Good ${time} ${this.name}`;
    }
  }
});
