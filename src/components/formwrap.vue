<template>
  <div class="formwrap">
    <i-form ref="form" :model="formValidate" :rules="rulesValidate">
      <i-from-item label="用户名" prop="userName">
        <i-input v-model="formValidate.userName"></i-input>
      </i-from-item>
      <i-from-item label="邮箱" prop="email">
        <i-input v-model="formValidate.email"></i-input>
      </i-from-item>
      <i-from-item label="记住账号" prop="remember">
        <i-checkbox v-model="formValidate.remember">是否记住</i-checkbox>
      </i-from-item>
      <i-from-item label="喜欢的水果" prop="fruits">
        <i-checkbox-group v-model="formValidate.fruits">
          <i-checkbox v-for="item in fruitsList" :key="item.value" :label="item.value">{{item.name}}</i-checkbox>
        </i-checkbox-group>
      </i-from-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import iForm from './form/form.vue'
import iFromItem from './form/formItem'
import iInput from './input/input'
import iCheckbox from './checkbox/checkbox'
import iCheckboxGroup from './checkbox/checkbox-gourp'
export default {
  name: 'formwrap',
  data () {
    return {
      formValidate: {
        userName: '',
        email: '',
        remember: false,
        fruits: ['apple']
      },
      rulesValidate: {
        userName: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {max: 20, message: '用户名不能超过20字', trigger: 'blur'}
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        remember: [
          {required: true, message: '必选是否记住', type: 'boolean', trigger: 'change'}
        ],
        fruits: [
          {required: true, type: 'array', message: '水果为必选', trigger: 'change'}
        ]
      },
      fruitsList: [
        {name: '苹果', value: 'apple'},
        {name: '梨子', value: 'pear'},
        {name: '香蕉', value: 'banana'}
      ]
    }
  },
  components: {
    iForm,
    iFromItem,
    iInput,
    iCheckbox,
    iCheckboxGroup
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        console.log(valid)
      })
      return false
    },
    handleReset () {
      this.$refs.form.resetField()
      return false
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.formwrap {
  padding: 10px;
}
</style>
