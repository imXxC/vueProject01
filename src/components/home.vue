<template>
  <div>
    <h1 v-text="msg"></h1>
    <input placeholder="输入名称" type="text" v-model="name">
    <button @click="changeName">commit修改数据</button>
    <button @click="changeNameActive">action修改数据</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home组件',
      name: ''
    }
  },
  methods: {
    changeName () {
      this.$store.commit('car/changeName', this.name)
    },
    changeNameActive () {
      this.$store.dispatch('car/changeAction', this.name)
    }
  }
}
</script>