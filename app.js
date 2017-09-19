new Vue({
  el:'#vue-app',
  data: {
    name: 'Shaun',
    job: 'Ninja',
    website: 'http://www.thenetninja.com',
    websiteTag: '<a href="http://www.thenetninja.com">The Ninja Website</a>'
  },
  methods: {
    greet (time) {
      return `Good ${time} ${this.name}`;
    }
  }
});
