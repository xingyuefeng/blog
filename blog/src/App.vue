<template>
  <div class="layout">
    <mu-circular-progress :size="60" :strokeWidth="5" v-if="show" />
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  created () {
    this.axios.interceptors.request.use((config) => {
      this.show = true
      return config
    })
    this.axios.interceptors.response.use((config) => {
      this.show = false
      return config
    })
  }
}
</script>

<style scoped>
  .mu-circular-progress {
    position: fixed;
    left: 45%;
    top: 45%;
  }
</style>
