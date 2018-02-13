<template>
  <div>
    <list type="0"></list>
  </div>

</template>

<script>
import list from '../../components/list'

export default {
  components: {
    list
  }
}

</script>

<style lang="css">
.demo-infinite-container{
  width: 256px;
  height: 300px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
</style>
