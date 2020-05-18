<template>
  <div class="home">
    <h1>HOME</h1>
    <router-link to="Blog">Blog</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
  import  Blog from '../Blog/index'
export default {
  name: 'Home',
  components: {
    Blog
  }
}
</script>
