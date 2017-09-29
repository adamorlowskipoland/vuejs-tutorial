<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue'
  import showBlogs from './components/showBlogs.vue'
  import listBlogs from './components/listBlogs.vue'

  export default {
    components: {
      addBlog,
      showBlogs,
      listBlogs
    }
  }
</script>
