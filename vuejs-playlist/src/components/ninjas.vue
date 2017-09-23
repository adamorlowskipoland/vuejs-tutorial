<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>
          {{ ninja.name }}
          <h3 v-show="ninja.show">
            {{ ninja.speciality }}
          </h3>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
//    this is how you receive data
//    props: ['ninjas'],

//    you can also do it like this, with checking that received props are an Array (they have to be an Array)
    props: {
      ninjas: {
        type: Array,
        required: true
      }
    },
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
  #ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
