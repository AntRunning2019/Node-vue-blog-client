<template>
  <el-container id="container">
    <el-main></el-main>
    <el-aside>
      <div class="search">
        <div class="search-main">
          <input class="search-input" v-model="searchInput" placeholder="请输入要搜索的文章"/>
          <i class="el-icon-search"></i>
        </div>
        <div class="search-article">
          <ul @mouseleave="handleLeave">
            <li
                    v-for="item in getArticleTags"
                    @mouseenter="handleEnter"
            ><a>{{item}}</a></li>
          </ul>
          <div class="cover" :style="{top:coverTop+'px'}"></div>
        </div>
      </div>
      <div class="hot"></div>
      <div class="recommend"></div>
      <div class="visitor"></div>
    </el-aside>
  </el-container>
</template>

<script>
  import request from '../../../../api'
  let getArticleInfo = request.getArticleInfo
  export default {
    name: "Container",
    data() {
      return {
        searchInput: '',
        // 文章分类
        articleTags: ['全部文章', '个人日记', 'HTML5新特性', 'CSS3', 'Node.js', 'Vue'],
        coverTop: 0
      }
    },
    methods: {
      // handleEnter(index){
      //   this.coverTop = index*40
      // }
      handleEnter(e) {
        this.coverTop = e.target.offsetTop
      },
      handleLeave() {
        this.coverTop = 0
      }
    },
    computed:{
      getArticleTags(){
        return ["全部文章",...this.articleTags]
      }
    },
    created() {
      getArticleInfo()
          .then((data) => {
            this.articleTags = data.data.data.tags
          })
          .catch((err) => {
            console.log(err)
          })
    }
  }
</script>

<style scoped lang="less">
  #container {
    margin: 0 auto;
    padding-top: 80px;
    width: 85%;
    height: 100vh;

    > .el-container {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      max-width: 1360px;
      height: 60px;
      margin: 0 auto;
      padding: 0 50px;
    }

    > .el-aside {
      width: 400px;
      height: 100vh;
      background-color: aqua;
      opacity: 0.9;

      > .search {
        width: 100%;
        height: 400px;
        /*background-color: lightgoldenrodyellow;*/
        background-color: rgba(255, 255, 255, 0.6);

        .search-main {
          position: relative;
          width: 100%;
          background-color: gray;
          height: 80px;
          padding: 20px;
          text-align: center;
          box-sizing: border-box;

          .search-input {
            width: 80%;
            height: 40px;
            border: none;
            border-radius: 20px;
            overflow: hidden;
            outline: none;
            font-size: 14px;
            padding-left: 15px;

            /deep/ input {
              &:focus, &:hover {
                border: none;
                outline: none;
              }
            }

          }

          i {
            position: absolute;
            right: 51px;
            top: 29px;
            width: 22px;
            height: 22px;
            font-size: 20px;
            line-height: 22px;
            text-align: right;
            font-weight: 600;
            color: #787977;
          }
        }

        .search-article {
          position: relative;
          width: 100%;
          margin-top: 20px;

          ul {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: 100%;
            padding: 0 30px;

            li {
              position: relative;
              z-index: 1;
              width: 100%;
              height: 40px;
              line-height: 40px;
              border-bottom: 1px dotted #eee;

              a {
                font-weight: 400;
                display: block;
                width: 100%;
                height: 100px;
                color: #787977;
                font-size: 15px;
              }
            }
          }

          .cover {
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 40px;
            border-right: 5px solid #000;
            background-color: rgba(0, 0, 0, .03);

          }
        }
      }
    }
  }
</style>