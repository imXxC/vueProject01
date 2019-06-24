<template>
  <div>
    <h1 v-text="msg"></h1>
    <!-- <div>{{$route.params.user}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'list组件'
    }
  },
  mounted () {
    console.log(this.$route.params.user)
  }
}
</script>