<template>
  <div class="formwrap">
    <i-form ref="form" :model="formValidate" :rules="rulesValidate">
      <i-from-item label="userName" prop="userName">
        <i-input v-model="formValidate.userName"></i-input>
      </i-from-item>
      <i-from-item label="password" prop="password">
        <i-input v-model="formValidate.password"></i-input>
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
export default {
  name: 'formwrap',
  data () {
    return {
      formValidate: {
        userName: '',
        password: ''
      },
      rulesValidate: {
        userName: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {max: 20, message: '用户名不能超过20字', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  components: {
    iForm,
    iFromItem,
    iInput
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
