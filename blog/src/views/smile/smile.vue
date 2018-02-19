<template>
  <div>
    <list type="2"></list>
    <!--<input type="file"  accept="image/gif,image/jpeg,image/jpg,image/png"
     name="logo"   @change='onUpload($event)' ref="upload" /> -->

  </div>
</template>

<script>
import list from '../../components/list'

export default {
  components: {
    list
  },
  // multipart/form-data
  methods: {
    // onUpload (e) {
    //   var formData = new FormData()
    //   formData.append('logo', e.target.files[0])
    //   let config = {
    //     headers:{'Content-Type':'multipart/form-data'}
    //   };  //添加请求头
    //   this.axios.post('/article/upload',
    //     formData
    //   ).then(res => {
    //     this.url = 'http://localhost:3000/'+res.data.data
    //     console.log(this.url)
    //   })
    // }
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
