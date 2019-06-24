<template>
  <div>
    <h1 v-text="msg"></h1>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'search组件'
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
      console.log(from)
    }
  },
  mounted () {
    console.log(this.$route.params.id)
  }
}
</script>
