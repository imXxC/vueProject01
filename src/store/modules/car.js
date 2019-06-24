const state = {
  size: 'large',
  age: 10,
  color: 'red',
  name: 'bj'
}

const getters = {
  carName: state => {
    return state.name
  }
}

const mutations = {
  changeName (state, newName) {
    state.name = newName
  }
}

const actions = {
  changeAction (context, newName) {
    context.commit('changeName', newName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}