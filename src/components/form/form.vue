<template>
  <form>
    <slot>表单组件</slot>
  </form>
</template>

<script>
import emitter from '../../dispatch/emitter.js'
export default {
  name: 'iForm',
  mixins: [emitter],
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  provide () {
    return {
      form: this,
    }
  },
  data () {
    return {
      fields: [],   // 缓存所有formItem
    }
  },
  methods: {

  },
  created () {
    this.$on('on-form-item-add', data => {
      if (data) this.fields.push(data)
    })

    this.$on('on-form-item-remove', data => {
      if (data.prop) this.fields.splice(this.fields.indexOf(data), 1)
    })
  }
}
</script>

<style scoped>

</style>

