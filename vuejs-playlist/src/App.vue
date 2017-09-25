<template>
  <div>
    <component v-bind:is="component"></component>
    <button v-on:click="component = 'form-one'">Show form One</button>
    <button v-on:click="component = 'form-two'">Show form Two</button>
  </div>
</template>

<script>
  import FormOne from './components/form-one.vue'
  import FormTwo from './components/form-two.vue'

  export default {
    components: {
      FormOne,
      FormTwo
    },
    data() {
      return {
        component: FormOne
      }
    },
    methods: {}
  }
</script>
