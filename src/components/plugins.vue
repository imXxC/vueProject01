<template>
  <div>
    <h1 v-text="msg"></h1>
    <div>inject接收APP组件的计算属性： {{app.name}}</div>
    <div>
      <input type="text" v-model="app.msg" style="margin-right: 10px;">
      <button @click="sendMsg">修改数据</button>
    </div>
    <slotDemo>
      <div>父组件传值</div>
      <div slot="parent">
        <h6>指定slot名称</h6>
      </div>
      <!-- 调用作用域slot, 显示逻辑及显示样式由父组件定义 -->
      <template slot-scope="user" slot="slotName">
        <ul v-for="(item, key) in user.data" :key="key">
          <li class="li" v-text="item.name"></li>
        </ul>
      </template>
    </slotDemo>
  </div>
</template>

<script>
import slotDemo from '../slot/slotDemo.vue'
import myMixin from '../mixins/mixins.js'
import emitter from '../dispatch/emitter'
export default {
  name: 'plugins',
  inject: ['app'],
  mixins: [myMixin, emitter],
  data () {
    return {
      msg: 'plugins组件'
    }
  },
  components: {
    slotDemo
  },
  methods: {
    sendMsg () {
      this.app.setMsg(this.app.msg)
      this.sayHello()
    }
  },
  mounted () {
    this.broadcast('slotDemo', 'postMessage', 'haha')
    this.$on('childrenSay', data => {
      console.log('父组件接收到事件')
      console.log(data)
    })
  }
}
</script>


<style scoped>
.li {
  color: red;
}
</style>
