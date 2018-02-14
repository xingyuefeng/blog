<template>
  <div>
    <div class="header">
      <div class="logo">
        xyf的博客
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="fontend" title="前端" @click="jump('fontend')"/>
          <mu-tab value="afterend" title="后端" @click="jump('afterend')"/>
          <mu-tab value="smile" title="杂记" @click="jump('smile')"/>
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
      xyf的博客 ©2017 Created by xyf
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'fontend'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    jump (val) {
      this.$router.push(`/${val}`)
    }
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
  max-width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  width: 75%;
  margin: 0 auto;
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 500px;

}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>
