<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
  <div v-theme:column="'narrow'"
       id="show-blogs">
    <h1>All blog articles</h1>
    <input type="text"
           v-model="search"
           placeholder="search"
           class="search">
    <div v-for="blog in filteredBlogs"
         class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2>{{ blog.title | toUpperCase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet}}</article>
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
      this.$http.get('https://vuejs-playlist-5ec67.firebaseio.com/posts.json')
        .then((data) => {
          return (data.json());
        }).then((data) => {
          const blogsArray = [];
          for (let key in data) {
            data[key].id = key;
            blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
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
  a {
    text-decoration: none;
    color: #444;
  }

  .search {
    display: inline-block;
    margin: 0 auto;
    font-size: 24px;
    padding: 2px 5px;
    line-height: 2;
  }
</style>
