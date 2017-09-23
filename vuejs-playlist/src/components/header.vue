<template>
  <div>
    <header>
      <h1 v-on:click="changeTitle">
        {{ title }}
      </h1>
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    methods: {
      changeTitle () {
        this.title = 'Vue Wizards'
      }
    }
  }
</script>
<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>

<!--  clicking on header changes only header no footer  - primitive type data-->
