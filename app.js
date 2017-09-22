new Vue ({
  el: '#vue-app',
  data: {
    output: 'Your fav foods'
  },
  methods: {
    readRefs () {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
  }

});
