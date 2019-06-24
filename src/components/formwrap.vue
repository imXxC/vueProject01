<template>
  <div class="formwrap">
    <i-form :model="formValidate" :rules="rulesValidate">
      <i-from-item label="userName" prop="userName">
        <i-input v-model="formValidate.userName"></i-input>
      </i-from-item>
      <i-from-item label="password" prop="password">
        <i-input v-model="formValidate.password"></i-input>
      </i-from-item>
    </i-form>
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
          {required: true, type: 'string', message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          // {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
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
