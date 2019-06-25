<template>
  <div class="wrap">
    <label class="floatleft" :class="{'i-form-item-label-required': isRequired}" v-if="label" v-text="label + '：'"></label>
    <div class="floatleft">
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import AsyncValidator  from 'async-validator'
import emitter from '../../dispatch/emitter.js'
export default {
  name: 'iFormItem',
  mixins: [emitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    // prop 就是当前组件值的key
    prop: {
      type: String
    }
  },
  data () {
    return {
      isRequired: false,
      validateState: '',        // 校验状态
      validateMessage: '',      // 校验不通的信息
      initialValue: ''          // 还原初始值时使用
    }
  },
  computed: {
    fieldValue () {
      if (!this.prop) return ''
      return this.form.model[this.prop]
    }
  },
  methods: {
    setRules () {
      let rules = this.getRules()
      if (rules.length) {
        rules.every(rule => {
          this.isRequired = rule.required
        })
      }
      // 监听子组件的input事件
      this.$on('on-form-change', this.onFieldChange)
      // 监听子组件的blur事件
      this.$on('on-form-blur', this.onFieldBlur)
    },
    getRules () {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule (trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
     /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate (trigger, callback = function () {}) {
      let rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        return true
      }
      this.validateState = 'validating'

      // 以下为 async-validator 库的调用方法
      let descriptor = {}
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)

      let model = {}
      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        console.log(errors)
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage =  errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    },
    // 重置数据
    resetField () {
      this.validateState = '';
      this.validateMessage = '';

      this.form.model[this.prop] = this.initialValue;
    },
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      this.validate('change')
    }
  },
  mounted () {
    if (this.prop) {
      // 指定了prop  向form组件发送自己  因为是在组件内  不能让用户自己用v-on监听事件，所以不能用$emit发送
      this.dispatch('iForm', 'on-form-item-add', this)

      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue

      this.setRules()
    }
  },
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this)
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
  margin-bottom: 10px;
}

.floatleft {
  float: left;
}

.i-form-item-label-required:before {
  content: '*';
  color: red;
}
.i-form-item-message {
  color: red;
}
</style>

