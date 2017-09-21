new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch () {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
      console.log(this.health)
    },
    restart () {
      this.health = 100;
      this.ended = false;
      console.log(this.health)
    }
  },
  computed: {}
});
