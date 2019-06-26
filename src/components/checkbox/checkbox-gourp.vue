<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import emitter from '../../dispatch/emitter.js'
import { findComponentsDownward } from '../../utils/assist.js'
export default {
  name: 'iCheckboxGroup',
  mixins: [emitter],
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  watch: {
    value () {
      this.updateModel(true);
    }
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'iCheckbox')
      if (this.childrens) {
        const { value } = this

        this.childrens.forEach(child => {
          child.model = value

          if (update) {
            child.currentValue = value.includes(child.label)
            child.group = true
          }
        })
      }
    },
    change (data) {
      this.currentValue = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('iFormItem', 'on-form-change', data);
    }
  },
  mounted () {
    this.updateModel(true)
  }
}
</script>
