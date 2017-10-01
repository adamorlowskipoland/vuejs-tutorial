<template>
  <div id="single-blog">
    <h1>
      {{ blog.title }}
    </h1>
    <article>
      <p>
        {{ blog.content }}
      </p>
      <p>
        Author: {{ blog.author }}
      </p>
      <ul>
        <li v-for="category in blog.categories">
          {{ category }}
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created () {
      this.$http.get('https://vuejs-playlist-5ec67.firebaseio.com/posts/' + this.id + '.json')
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          this.blog = data;
      })
    }
  }
</script>
<style scoped>
  #single-blog {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
