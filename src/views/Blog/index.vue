<template>
  <div class="blog">
    <Nav></Nav>
    <container></container>
    <h1>BLOG</h1>
  </div>
</template>

<script>
  import  Nav from '@/components/common/Nav'
  import  Container from '@/components/common/Container'
  export default {
    name: "index",
    components:{
      Nav,Container
    }
  }
</script>

<style scoped>

</style>