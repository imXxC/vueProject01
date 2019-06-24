<template>
  <div>
    <h1>slot组件</h1>
    <slot>默认solt</slot>
    <slot name="parent">指定slot名称的默认显示</slot>

    <!-- 作用域slot， 子组件提供数据， 父组件决定显示逻辑和样式 -->
    <slot name="slotName" :data="data"></slot>
  </div>
</template>

<script>
import emitter from '../dispatch/emitter.js'
export default {
  name: 'slotDemo',
  mixins: [emitter],
  data () {
    return {
      data: [
        {name: 'aaa', value: 1},
        {name: 'bbb', value: 1},
        {name: 'ccc', value: 1},
        {name: 'ddd', value: 1},
        {name: 'eee', value: 1},
        {name: 'fff', value: 1},
      ]
    }
  },
  methods: {
  },
  created () {
    this.$on('postMessage', data => {
      console.log('广播进入')
      console.log(data)
    })
  },
  mounted () {
    console.log('子组件生命周期')
    this.dispatch('plugin', 'childrenSay', this.data)
  }
}
</script>
