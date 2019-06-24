import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

import car from './modules/car'

console.log(car)

const store = new VueX.Store({
  modules: {
    car
  }
})

export default store
