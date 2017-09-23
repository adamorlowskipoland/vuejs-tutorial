<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <appFooter v-bind:title="title"></appFooter>
  </div>
</template>

<script>
  import AppHeader from './components/header.vue'
  import AppFooter from './components/footer.vue'
  import Ninjas from './components/ninjas.vue'

  export default {
    components: {
      AppHeader,
      Ninjas,
      AppFooter
    },
    data () {
      return {
        title: 'Vue Ninjas',
        ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
        ]
      }
    }
  }
</script>
