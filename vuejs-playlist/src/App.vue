<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <appFooter v-bind:title="title"></appFooter>
  </div>
</template>

<script>
  import FormHelper from './components/formHelper.vue'

  export default {
    components: {
      FormHelper
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>
