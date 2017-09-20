new Vue({
  el: '#vue-app',
  data: {
    name: '',
    age: ''
  },
  methods: {
    logName () {
      console.log('You entered your name');
    },
    logAge () {
      console.log('You entered your age');
    }
  }
});
