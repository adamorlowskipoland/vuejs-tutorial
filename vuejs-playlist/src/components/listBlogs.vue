<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
  <div v-theme:column="'narrow'"
       id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text"
           v-model="search"
           placeholder="search"
           class="search">
    <div v-for="blog in filteredBlogs"
         class="single-blog">
        <h2 v-rainbow>{{ blog.title | toUpperCase }}</h2>
      <article>{{ blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'

  export default {
    data() {
      return {
        blogs: [],
        search: ''
      }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          this.blogs = data.body.slice(0, 10);
        })
    },
    filters: {
      toUpperCase (value) {
        return value.toUpperCase();
      }
    },
    directives: {
      rainbow: {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString().slice(2, 8);
        }
      }
    },
    mixins: [
      searchMixin
    ]
  }
</script>
<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

  .search {
    display: inline-block;
    margin: 0 auto;
    font-size: 24px;
    padding: 2px 5px;
    line-height: 2;
  }
</style>
