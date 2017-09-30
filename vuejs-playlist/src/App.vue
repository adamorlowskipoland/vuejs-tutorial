<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AddBlog from './components/addBlog.vue'
  import ShowBlogs from './components/showBlogs.vue'
  import ListBlogs from './components/listBlogs.vue'
  import AppHeader from './components/header.vue'

  export default {
    components: {
      AddBlog,
      ShowBlogs,
      ListBlogs,
      AppHeader
    }
  }
</script>
