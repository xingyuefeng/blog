<template>
  <div class="login">
    <mu-text-field label="账号"  hintText="请输入账号" v-model="zh" labelFloat fullWidth :errorText="errzh" /><br/>
    <mu-text-field label="密码" hintText="请输入密码" v-model="pass" type="password" labelFloat fullWidth :errorText="errpass"  /><br/>
    <mu-raised-button @click="sub" label="提交" class="demo-raised-button" primary/>
    <mu-toast v-if="toast" message="登陆出错" @close="hideToast"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      zh: '',
      pass: '',
      errzh: '',
      errpass: '',
      toast: false
    }
  },
  methods: {
    hideToast () {
      this.toast = false
    },
    sub () {
      if (this.zh === '') {
        this.errzh = '账号没填'
        return false
      } else if (this.pass === '') {
        this.errpass = '密码没填'
        return false
      } else {
        this.errzh = ''
        this.errpass = ''
      }
      this.axios.post('/user/login', {
        zh: this.zh,
        pass: this.pass
      }).then(res => {
        if (res.data.code === 0) {
          const zh = res.data.data.zh
          this.setUser(zh)
          this.$router.push('/admin')
        } else {
          this.toast = true
        }
      })
    },
    ...mapActions([
      'setUser'
    ])
  }
}
</script>

<style lang="css">
  .login {
    width: 50%;
    margin: 70px auto;
  }
</style>
