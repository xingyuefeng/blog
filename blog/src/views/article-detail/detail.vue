<template>
  <div>
    <div class="title">{{title}}</div>
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

<style scoped>
  .title {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
  }
</style>
