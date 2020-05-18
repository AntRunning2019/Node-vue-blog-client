<template>
  <div class="nav-list">
    <ul :class="'list'+ whichActive">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="blog">博客</router-link>
      </li>
      <li>
        <router-link to="diary">日记</router-link>
      </li>
      <li>
        <router-link to="message">留言</router-link>
      </li>
      <li>
        <router-link to="links">友链</router-link>
      </li>
      <li>
        <router-link to="about">关于</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NavList",
    data() {
      return {
        routerList: ['Home', 'Blog', 'Diary', 'Message', 'Links', 'About']
      }
    },
    computed: {
      whichActive() {
        let index = this.routerList.indexOf((this.$route.name))
        return index + 1
      }
    }
  }
</script>

<style scoped lang="less">
  .nav-list {
    margin-right: 30px;
    width: 576px;
    height: 60px;

    ul {
      display: flex;
      width: 100%;
      height: 100%;

      li {
        flex: 1;

        a {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 60px;
          color: #212220;
          font-size: 16px;
          word-spacing: 25px;
          font-weight: 600;
          transition: all 0.8s;

          &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            content: " ";
            width: 0;
            height: 2px;
            background-color: #6bc30d;
          }
        }

        &:hover {
          a {
            color: #6bc30d;
          }

          a::after {
            width: 95%;
            transition: 0.5s;
          }
        }
      }

    }
  }
  .list1 li:nth-child(1),
  .list2 li:nth-child(2),
  .list3 li:nth-child(3),
  .list4 li:nth-child(4),
  .list5 li:nth-child(5),
  .list6 li:nth-child(6){
    a {
      color: #6bc30d;
      &::after {
        width: 95%;
      }
    }
  }

</style>