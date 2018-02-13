<template>
  <div class="layout">
    <div class="header">
      <div class="logo">
        admin
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="editor" title="发布文章" @click="jump('editor')"/>
          <mu-tab value="management" title="管理文章" @click="jump('management')"/>
        </mu-tabs>
      </div>
    </div>
    <div class="content">
      <div class="breadcrumb">
      </div>
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      activeTab: 'editor'
    }
  },
  created () {
    if (!this.$cookie.get('userid')) {
      this.$router.push('/login')
      return false
    }
  },
  methods: {
    handleTabChange (val) {
      console.log(val)
      this.activeTab = val
    },
    jump (val) {
      this.$router.push(`/${val}`)
    },
    ...mapGetters([
      'getUser'
    ])
  }
}
</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #474a4f;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  width: 90%;
  margin: 0 auto;
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 600px;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>
