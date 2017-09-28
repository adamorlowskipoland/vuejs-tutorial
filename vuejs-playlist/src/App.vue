<template>
  <div>
    <show-blog></show-blog>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue'
  import showBlog from './components/showBlog.vue'

  export default {
    components: {
      addBlog,
      showBlog
    }
  }
</script>
