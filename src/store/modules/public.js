export default {
  namespaced: true,
  state: {
    name:'test'
  },
  getters: {
    getName (state) {
      return state.name
    }
  },
  actions: {
    set ({ commit }, name) {
      setTimeout(()=>{
          commit('changeName',name)
      },100)
    }
  },
  mutations: {
      changeName (state,name) {
          state.name = name
    }
  }
}
