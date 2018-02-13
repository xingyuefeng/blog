<template>
  <div class="markdown">
    <mu-text-field label="标题" v-model="title"/>
    <span class="ceshi">12312</span>
    <mavon-editor v-model="value"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''，
      title: ''
    }
  }
}
</script>
