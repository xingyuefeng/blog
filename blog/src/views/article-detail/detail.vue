<template>
  <div>
    <div class="article_title">{{title}}</div>
    <div class="detail" v-html="content" v-highlight></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  created () {
    const id = this.$route.params.id
    this.axios.post('/article/detail', {
      id: id
    }).then(res => {
      if (res.data.code === 0) {
        this.title = res.data.data.title
        this.content = marked(res.data.data.content)
      }
    })
  }
}
</script>

<style>
  .article_title {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
  }
  pre, code {
    background: rgba(0, 0, 0, .04) !important;
  }
</style>
