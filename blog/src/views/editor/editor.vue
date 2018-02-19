<template>
  <div class="markdown">
    <mu-text-field label="标题" v-model="title" hintText="请输入标题" fullWidth /><br/>
    <mu-radio label="前端" name="group" nativeValue="0" v-model="type" class="demo-radio"/> <br/>
    <mu-radio label="后端" name="group" nativeValue="1" v-model="type"  class="demo-radio"/> <br/>
    <mu-radio label="smile" name="group" nativeValue="2" v-model="type"  class="demo-radio"/> <br/>
    <mavon-editor v-model="value"  ref=md @imgAdd="$imgAdd" /><br/>
    <div class="button">
      <mu-raised-button  @click="sub" label="提交" class="demo-raised-button" primary/><br/>
    </div>
    <mu-toast v-if="toast" :message="msg" @close="hideToast"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      title: '',
      msg: '',
      toast: false,
      type: '-1'
    }
  },
  methods: {
    hideToast () {
      this.toast = false
    },
    sub () {
      this.axios.post('/article/push', {
        title: this.title,
        content: this.value,
        type: Number(this.type)
      }).then(res => {
        const data = res.data
        if (data.code === 0) {
          this.msg = '发布成功'
        } else {
          this.msg = '发布失败'
        }
        this.toast = true
      })
    },
    $imgAdd (pos, $file) {
      var formdata = new FormData()
      formdata.append('image', $file)
      this.axios.post('/article/upload',
        formdata
      ).then(res => {
        var url = 'http://localhost:3000/' + res.data.data.replace('\\', '/')
        this.$refs.md.$img2Url(pos, url)
        console.log(url)
      })
    }
  }
}
</script>

<style scoped>

</style>
