<template>
  <div>
    <footer>
      <p>
        {{ copyrights }} {{ title }}
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        copyrights: 'Copyright 2017'
      }
    }
  }
</script>
<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }
  p {
    color: lightgreen;
    text-align: center;
  }
</style>
