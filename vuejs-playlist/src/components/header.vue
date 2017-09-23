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
  import {bus} from '../main'

  export default {
    props: {
      title: {
        type: String
      }
    },
    methods: {
      changeTitle () {
//        this.$emit('changeTitle', 'Vue Wizards');
        this.title = 'Vue Wizzards changed by bus';
        bus.$emit('titleChanged', this.title)
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
