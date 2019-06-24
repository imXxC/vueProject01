<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a href="javascript: void(0);" v-on:click="jump">JS跳转</a>
    <div>购物车名称--------> {{name}}  --------------> 父路由</div>
    <input type="text" v-model="msg">
    <div>{{cop}}</div>
    <div class="tab">
      <router-link to="/HelloWorld">Hello</router-link>
      <router-link to="/Home">Home</router-link>
      <router-link :to="{name: 'List', params: {user: 'wudi'}}">List</router-link>
      <router-link to="/Plugins">Plugins</router-link>
      <router-link :to="{path: '/Search/' + num}">Search</router-link>
      <router-link to="/FormWrap">formWrap</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      msg: 'app组件',
      num: 1
    }
  },
  computed: mapState({
    size: state => state.car.size,
    age: state => state.car.age,
    color: state => state.car.color,
    name: state => state.car.name,
    cop () {
      return '常规的computed'
    }
  }),
  methods: {
    jump () {
      this.$router.push('/Search/' + ++this.num)
    },
    setMsg (data) {
      this.msg = data
    }
  },
  mounted () {
    console.log(this.$store.state.car.name)
    console.log(this.$store.getters['car/carName'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.tab {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 30px;
}

.tab>a {
  display: block;
  padding: 0 10px;
  min-width: 50px;
  text-align: center;
  text-decoration: none;
  line-height: 30px;
  border: 1px solid #ddd;
  background: #0094ff;
  color: #fff;
}

.tab .router-link-exact-active.router-link-active{
  background: red;
}
</style>

