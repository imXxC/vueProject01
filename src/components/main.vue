<template>
  <div>
    <h1>主组件</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../router/router'
export default {
  name: 'main',
  data () {
    return {
      msg: '主组件',
      num: 1
    }
  }
}
</script>