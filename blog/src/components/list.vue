<template>
  <div>
    <mu-list>
      <div v-for="(item,index) in list" :key="index">
        <mu-list-item @click="type !== 'all' ? readDetail(item._id) : editDetail(item._id)" :title="item.title" :describeText="item.create_time | time">
          <mu-icon v-if="type === 'all'" @click.stop="del(item._id)" value="backspace" slot="right"/>
        </mu-list-item>
        <mu-divider inset/>
      </div>
    </mu-list>
  </div>

</template>

<script>

export default {
  props: ['type'],
  data () {
    return {
      list: [],
      num: 10,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
    this.type !== 'all'
      ? this.axios.post('/article/list', {type: this.type})
        .then(res => {
          if (res.data.code === 0) {
            this.list = res.data.list.reverse()
            console.log(this.list)
          }
        })
      : this.axios.post('/article/all')
        .then(res => {
          if (res.data.code === 0) {
            this.list = res.data.list.reverse()
            console.log(this.list)
          }
        })
  },
  methods: {
    readDetail (id) {
      this.$router.push(`/detail/${id}`)
    },
    editDetail (id) {
      this.$router.push(`/update/${id}`)
    },
    del (id) {
      this.axios.post('/article/delete', {
        id: id
      }).then(res => {
        if (res.data.code === 0) {
          var index = this.list.findIndex(item => (
            item._id === id
          ))
          this.list.splice(index, 1)
        }
      })
    }
  },
  filters: {
    time (val) {
      var date = new Date(val)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
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
