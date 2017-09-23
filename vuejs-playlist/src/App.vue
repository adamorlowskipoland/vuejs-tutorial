<template>
  <div>
    <app-header></app-header>
    <ninjas></ninjas>
    <appFooter></appFooter>
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
    }
  }
</script>
