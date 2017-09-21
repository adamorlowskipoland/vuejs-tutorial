const one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'vue app one'
  },
  methods: {
    console () {
      console.log(this.title);
    }
  },
  computed: {
    greet () {
      return 'Hello from app one :)'
    }
  }
});

const two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'vue app two'
  },
  methods: {
    console () {
      console.log(this.title);
    },
    changeTitle (givenData) {
      one.title = givenData;
    }
  },
  computed: {
    greet () {
      return 'Yo, dudes, this is app 2 speaking to ya :)'
    }
  }
});

two.title = 'Changed from outside';
