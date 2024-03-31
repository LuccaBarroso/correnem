const state = () => ({
  user: null
})

// getters
const getters = {}

// actions
const actions = {
  async login({ commit }, { email, password }) {
    if (email === 'admin@' && password === 'admin') {
      commit('setUser', { email })
      return Promise.resolve()
    } else {
      return Promise.reject('Invalid username or password')
    }
  }
}

// mutations
const mutations = {
  setUser(state, { email }) {
    state.user = { email }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
