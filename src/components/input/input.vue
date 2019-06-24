<template>
  <input type="text" :value="currentValue" @input="inputValue" @blur="handleBlur">
</template>

<script>
import emitter from '../../dispatch/emitter.js'
export default {
  name: 'iInput',
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    inputValue (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)  // 传递一个input事件出去   外层通过@input接收事件
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handleBlur (event) {
      this.$emit('blur', this.currentValue)
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  }
}
</script>