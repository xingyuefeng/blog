<template>
  <div class="markdown">
    <mu-text-field label="标题" v-model="title" hintText="请输入标题" fullWidth /><br/>
    <mu-radio label="前端" name="group" nativeValue="0" v-model="type" class="demo-radio"/> <br/>
    <mu-radio label="后端" name="group" nativeValue="1" v-model="type"  class="demo-radio"/> <br/>
    <mu-radio label="smile" name="group" nativeValue="2" v-model="type"  class="demo-radio"/> <br/>
    <mavon-editor v-model="value"/><br/>
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
      type: '-1',
      create_time: ''
    }
  },
  created () {
    this.axios.post('/article/detail', {
      id: this.$route.params.id
    }).then(res => {
      const data = res.data.data
      this.type = String(data.type)
      this.value = data.content
      this.title = data.title
      this.create_time = data.create_time
    })
  },
  methods: {
    hideToast () {
      this.toast = false
    },
    sub () {
      this.axios.post('/article/update', {
        id: this.$route.params.id,
        title: this.title,
        content: this.value,
        type: Number(this.type),
        create_time: this.create_time
      }).then(res => {
        const data = res.data
        if (data.code === 0) {
          this.msg = '修改成功'
        } else {
          this.msg = '修改失败'
        }
        this.toast = true
      })
    }
  }
}
</script>

<style scoped>

</style>
