Vue.component('greeting', {
  template:'<p>Hey there, I am {{ name }}.<button @click="changeName">Change name</button></p>',
  data () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName () {
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: '#vue-app-one'
});

new Vue({
  el: '#vue-app-two'
});
